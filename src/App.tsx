import React,{useState,useEffect} from 'react';
import HightBar from './Components/HightBar';
import axios,{AxiosResponse} from 'axios';
import { IMovie } from './types/types';
import Movie from './Components/Movie'
import {Route,Redirect,Switch} from 'react-router-dom'
import PaginationMenu from './Components/Pagination';






const App:React.FC = () => {

  const [films,setFilms] = useState<IMovie[]>([])
  const [page,setPage] = useState<number>(1)
  let URL:string = `https://yts.mx/api/v2/list_movies.json?page=${page}`;

  useEffect(() => getMovies, [page])

  const getMovies = () => {
    axios.get(URL).then(({data}:AxiosResponse<any>)=>{
      setFilms(data.data.movies);
      
    })
}
console.log(page)
console.log(films)

  return (
    <div className="App">
     <HightBar>
       <PaginationMenu page={page} setPage={setPage}/>
     </HightBar>
     {
     <div className='movieList'> 
       {films.map((item,idx)=><Movie key={idx}  {...item}/>)}
     </div>
     }
    </div>
  );
}

export default App;
