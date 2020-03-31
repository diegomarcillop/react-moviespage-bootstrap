import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useParams } from "react-router";
import InfoMovie from "../components/infoMovie";

function InfoMovieContainer(props) {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [movie, setMovie] = useState({ movie: {}, video:{} });
  let { idMovie } = useParams();

  useEffect(() => {    
    async function apiData() {
      await Axios.get(
        `https://api.themoviedb.org/3/movie/${idMovie}?api_key=${apiKey}&language=en-US`
      )
        .then(({ data }) => { 
           setMovie({
            movie: data
          });
        })
        .catch(err => console.log(err))
    } 
    
     apiData(); 
   }, [apiKey, setMovie, idMovie]);

   
  
  return <InfoMovie  movie={movie.movie} />;
}
export default InfoMovieContainer;
