import React, { useEffect, useState} from "react";
import styles from "./ContentSection.module.css";
import axios from "axios";
import NothingToDisplay from "../NothingToDisplay";
import MoviesGrid from "../MoviesGrid";

export default function ContentSection() {

  const url1 = 'https://challenge.lexicondigital.com.au/api/v2/cinemaworld/movies'
  const url2 = 'https://challenge.lexicondigital.com.au/api/v2/filmworld/movies'
  const config = {
  headers: {
    'x-api-key': 'Yr2636E6BTD3UCdleMkf7UEdqKnd9n361TQL9An7',
    }
  }

  const [data1 , setData1] = useState(null);
  const [data2 , setData2] = useState(null);
  const [movies, setMovies] = useState(null);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(()=>{
    axios.get(url1, config).then(response => {
    setData1(response.data)
  });
     axios.get(url2, config).then(response => {
    setData2(response.data)
  });
  }, []);

  useEffect(()=>{
      if (data1 && data2) {
          const movies1 = data1.Movies;
          const movies2 = data2.Movies;
          var moviesList = [];

          movies1.forEach(movie => {
              var correspondingMovie = movies2.find((element) => {
                  return element.Title === movie.Title;
              });
              moviesList.push({
                  "Title": movie.Title,
                  "image": movie.Poster,
                  "cinemaworld": movie.Price,
                  "filmworld": correspondingMovie ? correspondingMovie.Price : -1
              });
          });

          movies2.forEach(movie => {
              var alreadyExists = moviesList.find((element) => {
                  return element.Title === movie.Title;
              });

              var correspondingMovie = movies1.find((x) => {
                  return x.Title === movie.Title;
              })

              if (alreadyExists) {
                  return;
              } else {
                  moviesList.push([{
                      "title": movie.Title,
                      "image": movie.Poster,
                      "cinemaworld": correspondingMovie.Price ? correspondingMovie.Price : -1,
                      "filmworld": movie.Price
                  }])
              }
          });
          setMovies(moviesList);
      }
  }, [data1, data2]);

  useEffect(()=>{
      setIsDataLoaded(true);
  },[movies]);

  return (
      (movies && movies.length > 0 && isDataLoaded)?
     <div className={styles.contentSection}>
        <MoviesGrid movies={movies}/>
    </div>
       :
       <div className={styles.contentSection}>
         <NothingToDisplay />
       </div>
  );
}
