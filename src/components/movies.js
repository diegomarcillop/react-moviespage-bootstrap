import React from "react";
import { Container, Row, Col } from "react-bootstrap";
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
      <Row  style={{
        paddingLeft: '13%'
      }} >
        {movies.map((movie, index) => {
            return (
             
            <div key={index}>
              <Col xs lg={12}>
                <Movie id={movie.id}title={movie.title} image={movie.poster_path} range={movie.vote_average} overview={movie.overview}/>
              </Col>
            </div>
          );
        })}
      </Row>
    </Container>
  );
}

export default Movies;
