import React,{useState,useEffect} from 'react';
import HightBar from './Components/HightBar';
import axios from 'axios';
import { IDataGetResponseMovies, IMovie } from './types/types';
import Movie from './Components/Movie'
import {Route,Switch} from 'react-router-dom'
import PaginationMenu from './Components/Pagination';
import FilmItem from './Components/FilmItem';







const App:React.FC = () => {

  const [films,setFilms] = useState<IMovie[]>([])
  const [currentPage,setCurrentPage] = useState<number>(1)
  let URL:string = `https://yts.mx/api/v2/list_movies.json?page=${currentPage}`;

  useEffect(() => getMovies(), [currentPage])


  const getMovies = () => {
    try{
      axios.get<IDataGetResponseMovies>(URL).then(({data})=>{
        setFilms(data.data.movies);
        console.log(data)
      })
    }
      catch(e){
          console.error(e)
      }
    }
  
  return (
    <div className="App">
     <HightBar>
       <PaginationMenu currentPage={currentPage} setCurrentPage={setCurrentPage} />
     </HightBar>
     <Switch>
      <Route path={`/movies`} render={
       ()=>
        <div className='movieList'> 
          {films && films.map((item,idx)=><Movie key={idx}  {...item}/>)}
        </div>
        
     }/>
      <Route path='/movieDetails/:id' component={FilmItem} />
      <Route render={()=>
        <div className='movieList'> 
          {films && films.map((item,idx)=><Movie key={idx}  {...item}/>)}
        </div>}/>
     </Switch>
     
     
    </div>
  );
}

export default App;
