import React from 'react'
import { IMovie } from '../types/types'


    




const Movie:React.FC<IMovie> = (props) => {
    return (
        <div className='movie_Container'>
            
                <img className='cover_Image' src={props.medium_cover_image} alt="cover_image" />
                <div className='cover_Info'>
                    <div>{props.rating}</div>
                    <div><ul>{props.genres.map((el)=> <li>{el}</li>)}</ul></div>
                    <div><button>More</button></div>
                </div>
                <div className='film_Name'>{props.title}</div>
                       
        </div>
    )
}

export default Movie
