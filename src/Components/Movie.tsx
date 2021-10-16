import React from 'react'
import { IMovie } from '../types/types'
import {Link} from 'react-router-dom'

const Movie:React.FC<IMovie> = (props) => {
    return (
        <div className='movie_Container'>
            
                <img className='cover_Image' src={props.medium_cover_image} alt="cover_image" />
                <div className='cover_Info'>
                    <div>{props.rating}</div>
                    <div><ul>{props.genres 
                     ? props.genres.map((el)=> <li>{el}</li>)
                     : "Unknown"}</ul></div>
                    <div><Link to={`/movieDetails/${props.id}`} >More</Link></div>
                </div>
                <div className='film_Name'>{props.title}</div>
                       
        </div>
    )
}

export default Movie
