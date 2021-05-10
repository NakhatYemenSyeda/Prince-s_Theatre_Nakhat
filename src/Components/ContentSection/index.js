import React, { useEffect, useState} from "react";
import styles from "./ContentSection.module.css";
import axios from "axios";

export default function ContentSection() {

  const url = ' https://challenge.lexicondigital.com.au/api/v2/filmworld/movies'
  const config = {
  headers: {
    'x-api-key': 'Yr2636E6BTD3UCdleMkf7UEdqKnd9n361TQL9An7',
    }
  }

  const [data , setData] = useState(null);

  useEffect(()=>{
    axios.get(url, config).then(response => {
    setData(response.data)
  })
  }, []);


  return (
   data ?
     <div className={styles.contentSection}>
      {  JSON.stringify(data) }
    </div>
       :
       <div>
         Nothing to display
       </div>
  );
}
