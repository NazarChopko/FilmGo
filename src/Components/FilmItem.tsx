import axios from 'axios'
import React, {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {StarFilled} from '@ant-design/icons';


import { IDataGetResponseMovie, IMovie } from '../types/types'
import { AddComment } from './Comment';



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
                {<div className='coverFilmRaiting'><span><StarFilled className='iconStar' style={{fontSize:'30px',color:'#1B69F5'}}/> {movieDetails?.rating}</span></div>}
                {<img src={movieDetails?.large_cover_image}/>}
            </div>
            <div className='movieContainer_info'>
                <div className='title'>
                    <h1>{movieDetails?.title}</h1>
                    <p>{movieDetails?.year}</p>
                    <div>{movieDetails?.genres?.map((el)=><span>● {el} </span>)}</div>
                </div>
                <div className='description'>
                    <h1>Description</h1>
                    <p>{movieDetails?.description_full}</p>
                </div>
                <div className='comments'>
                    <h1>Comments</h1>
                    <div className='comments-container'>
                       <AddComment/>
                    </div>
                </div>
                
            </div>
           
        </div>
    )
}

export default FilmItem
