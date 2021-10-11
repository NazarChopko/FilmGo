import React,{useState,useEffect} from 'react';
import HightBar from './Components/HightBar';
import axios,{AxiosResponse} from 'axios';
import { IMovie } from './types/types';
import Movie from './Components/Movie'






const App:React.FC = () => {

  const [films,setFilms] = useState<IMovie[]>([])
  const URL:string = `https://yts.mx/api/v2/list_movies.json?page=1`;

  useEffect(()=>getMovies(),[])

  const getMovies = () => {
  axios.get(URL).then(({data}:AxiosResponse<any>)=>setFilms(data.data.movies))
}

console.log(films)

  return (
    <div className="App">
     <HightBar/>
     <div className='movieList'> 
       {films.map((item,idx)=><Movie key={idx}  {...item}/>)}
     </div>
    </div>
  );
}

export default App;
