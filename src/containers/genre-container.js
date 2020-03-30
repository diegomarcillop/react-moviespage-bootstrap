import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Container } from "react-bootstrap";
 import Genres from "../components/genres";
 
function GenreContainer() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [genres, setGenres] = useState(null);

  useEffect(() => {
    console.log('REPITE')
    apiData();
  },[apiKey]);

  async function apiData() {
    await Axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`
    )
      .then(async ({ data }) => {
       await setGenres({
          res: data.genres
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  function options() {
    if (genres !== null) {
      return <Genres genres={genres.res} />;
    }
  }

  return <Container>{options()}</Container>;
}

export default GenreContainer;
