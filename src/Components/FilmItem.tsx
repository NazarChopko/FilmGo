import axios from 'axios'
import React, {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { IDataGetResponseMovie, IMovie } from '../types/types'

const FilmItem:React.FC = () => {

    const [movieDetails,setMovieDetails] = useState<IMovie | null>(null)
    const {id} = useParams<any>()
    const movieId:number = Number(id)
    

    useEffect(() => {
        getMovieDetails()
    }, [id])


    const getMovieDetails = () => {
        try{
            axios.get<IDataGetResponseMovie>(`https://yts.mx/api/v2/movie_details.json?movie_id=${movieId}`).then(
            ({data})=> {
            setMovieDetails(data.data.movie)   
            }
        )
        }
        catch(e){
            console.error(e)
        }
        }

    return (
        <div className='movieContainer'>
            <div className='movieContainer_image'>
                {<img src={movieDetails?.large_cover_image}/>}
            </div>
            <div className='movieContainer_info'>
                <div className='title'>
                    <h1>{movieDetails?.title}</h1>
                    <p>{movieDetails?.year}</p>
                    <div>{movieDetails?.genres?.map((el)=><span>----{el}</span>)}</div>
                </div>
                <div className='description'>
                    <h2>Description</h2>
                    <p>{movieDetails?.description_full}</p>
                </div>
                <div><h1>Comments</h1></div>
                
            </div>
           
        </div>
    )
}

export default FilmItem
