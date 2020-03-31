import Axios from "axios";
import React, { useEffect, useState } from "react";
import CarouselC from "../components/carousel";

function CarouselContainer() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [recommendations, setRecommendations] = useState({ res: [{}] });

  useEffect(() => {
    async function apiData() {
      await Axios.get(
        `https://api.themoviedb.org/3/movie/443791/recommendations?api_key=${apiKey}&language=en-US&page=1`
      )
        .then(({ data }) => {
          setRecommendations({
            res: data.results
          });
        })
        .catch(err => {
          console.log(err);
        });
    }

    apiData();
  }, [apiKey]);

  return <CarouselC movies={recommendations.res} />;
}
export default CarouselContainer;
