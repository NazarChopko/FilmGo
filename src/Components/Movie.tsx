import React from 'react'
import { IMovie } from '../types/types'
import {Link} from 'react-router-dom'
import {StarFilled} from '@ant-design/icons';



const Movie:React.FC<IMovie> = (props) => {

    return (
        <div className='movie_Container'>
            
                <img className='cover_Image' src={
                    props.medium_cover_image} 
                    alt=" " />
                <div className='cover_Info'>
                    <div className='rating'>
                        <StarFilled className='iconStar' style={{fontSize:'28px',color:'#1B69F5'}}/>
                        <div>{props.rating}</div>
                    </div>
                    
                    <div className='genres'><ul>{props.genres 
                     ? props.genres.map((el)=> <li>{el}</li>)
                     : "Unknown"}</ul></div>
                    <div><Link className='more' to={`/movieDetails/${props.id}`} >More</Link></div>
                </div>
                <div className='film_Name'>{props.title}</div>
                       
        </div>
    )
}

export default Movie
