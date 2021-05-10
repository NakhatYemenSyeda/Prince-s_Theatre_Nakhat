import React, { useEffect, useState} from "react";
import MoviesTile from "../MoviesTile";

export default function MoviesGrid(movies){
    console.log("Hellloooooo", movies.movies);
    return (
        <div>
            { movies.movies.map(m=> {
              var movie = m[0];
              console.log("Hereeeeee", movie.title);
              return (
                  <MoviesTile title={ movie.title } image={ movie.image } cinemaworld={ movie.cinemaworld } filmworld={ movie.filmworld } />
              );
              // <MoviesTile title={ movie.title } image={ movie.image } cinemaworld={ movie.cinemaworld } filmworld={ movie.filmworld }/>;
         }
         )};
        </div>
    );
}