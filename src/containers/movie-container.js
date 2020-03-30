import React, { useState, useEffect } from "react";
import Movies from "../components/movies";
import axios from "axios";
import { Row } from "react-bootstrap";

function MovieContainer({ title, category }) {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [movies, setMovies] = useState(null);

  useEffect(() => {

    async function dataApi() {
      let url;

      switch (category) {
        case "popular":
          url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=2`;
          break;
        case "premieres":
          url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`
        default:
          break;
      } 

      await axios
        .get(url)
        .then(({ data }) => {
          const result = data.results;
          setMovies({ res: result });
        })
        .catch(err => {
          console.error(err);
        });
    }


    dataApi();
  }, [apiKey]);

 

  const options = () => {
    if (movies != null) {
      return <Movies title={title}  movies={movies.res} />;
    }
  };

  return <Row>{options()}</Row>;
}

export default MovieContainer;
