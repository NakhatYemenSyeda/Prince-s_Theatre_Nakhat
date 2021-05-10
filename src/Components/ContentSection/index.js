import React, { useEffect, useState} from "react";
import styles from "./ContentSection.module.css";
import axios from "axios";
import NothingToDisplay from "../NothingToDisplay";

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

  useEffect(()=>{
    axios.get(url1, config).then(response => {
    setData1(response.data)
  });
     axios.get(url2, config).then(response => {
    setData2(response.data)
  });
  }, []);


  return (
      (data1 && data2)?
     <div className={styles.contentSection}>
      {  JSON.stringify(data1) }
      {  JSON.stringify(data2) }
    </div>
       :
       <div className={styles.contentSection}>
         <NothingToDisplay />
       </div>
  );
}
