import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import Movie from "./movie";

let style = {
  paddingTop: "1%", 
  fontFamily: "Fredoka One, Cursive", 
  color: "white", 
   
};

function Movies({ title, movies, icon }) {

  return (
    <Container  style={style}>
      <h4>
        <i className={icon}></i> {title}
      </h4>
      <Row  md="auto" style={{
        paddingLeft: '13%'
      }} >
        {movies.map((movie, index) => {
          console.log(movie);
           return (
            <div key={index}>
              <Col>
                <Movie title={movie.original_title} image={movie.poster_path} range={movie.vote_average} overview={movie.overview}/>
              </Col>
            </div>
          );
        })}
      </Row>
    </Container>
  );
}

export default Movies;
