import React, { useEffect, useState} from "react";
import MoviesTile from "../MoviesTile";
import styles from './MoviesGrid.module.css'

export default function MoviesGrid(movies){
    return (
        <div className={styles.cards}>
            { movies.movies.map(m=> {
              var movie = m[0];
              if (movie.title){
                   return (
                  <MoviesTile title={ movie.title } image={ movie.image } cinemaworld={ movie.cinemaworld } filmworld={ movie.filmworld } />
              );
              }
              else {
                  return(<span></span>);
              }
         }
         )}
        </div>
    );
}