import React, { useState, useEffect } from "react";
import Movies from "../components/movies";
import axios from "axios";
import { Row } from "react-bootstrap";

function MovieContainer({ title }) {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    dataApi();
  }, []);

  const dataApi = async () => {
    const api_key = "85f5a5d0c6e1af23a2e140e4d6fbfc26";
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=en-US&page=2`
      )
      .then(({ data }) => {
        const result = data.results;
        setMovies({ res: result });
      })
      .catch(err => {
        console.error(err);
      });
  };

  const options = () => {
    if (movies != null) {
      return  <Movies title={title} movies={movies.res} />
    }
  };

  return <Row>{options()}</Row>;
}

export default MovieContainer;
