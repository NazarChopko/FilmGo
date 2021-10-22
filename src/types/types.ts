export interface IMovie{
    id:number
    description_full:string
    language:string
    rating:number
    runtime:number
    title:string 
    year:number 
    medium_cover_image:string | any
    genres?:string[]
    large_cover_image?:string
}

 export interface IDataGetResponseMovies{
    meta:Object
    data:{
        limit:number
        movie_count:number
        movies:IMovie[]
        page_number:number
    }
    status:string
    status_message:string
}

export interface IDataGetResponseMovie{
    meta:Object
    data:{
        limit:number
        movie_count:number
        movie:IMovie
        page_number:number
    }
    status:string
    status_message:string
}

export interface ICommentUser{
    date:Date
    comment:string
}