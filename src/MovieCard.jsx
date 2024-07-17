import React from "react";



const MovieCard = ({ movie }) => {
    return(
        <div className='movie'>
          <div className='movie_img'>
            <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title} />
          </div>

          <div className='movie_title_2'>
            <span>{movie.Type}</span>
            <p>{movie.Year}</p>
          </div>

          <div className='movie_name'>
            <p>{movie.Title}</p>
          </div>
        </div>
    )
}

export default MovieCard;