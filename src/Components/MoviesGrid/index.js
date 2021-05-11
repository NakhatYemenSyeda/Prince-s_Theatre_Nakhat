import React, { useEffect, useState} from "react";
import MoviesTile from "../MoviesTile";
import styles from './MoviesGrid.module.css'

export default function MoviesGrid(movies){
    console.log(movies);
        return (
            <div className={styles.cards}>
                {
                    Object.entries(movies.movies).map(([key, value]) => {
                        var movie = value;
                  if (movie.Title){
                       return (
                      <MoviesTile title={ movie.Title } image={ movie.image } cinemaworld={ movie.cinemaworld } filmworld={ movie.filmworld } />
                  );
                  }
                  else {
                      return(<span></span>);
                  }
                    })
                }
            </div>
        );
}