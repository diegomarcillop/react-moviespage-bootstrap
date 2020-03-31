import React, { useEffect } from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";

function InfoMovie({ movie }) {
  var path = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  var backdrop_path = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;

  useEffect(() => {
    if (movie.genres !== undefined) {
        movie.genres.map(genre => {
        document.getElementById("genres").innerHTML =
          genre.name + " |  " + document.getElementById("genres").innerHTML;
      });
    }
  });

 
  return (
    <Container>
      <br />
      <Card
        className="card-movie"
        style={{
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          backgroundColor: "#EBEBEB"
        }}
      >
        <Image
          src={backdrop_path}
          width="100%"
          height="100%"
          style={{ position: "absolute", opacity: "0.2" }}
        />

        <Row style={{ padding: "20px", fontFamily: "Fredoka One, Cursive" }}>
          {console.log("entra")}
          <Col lg={4} style={{}}>
            {movie.poster_path !== undefined ? (
              <Card.Img variant="bottom" src={path}></Card.Img>
            ) : (
              <Card.Img
                variant="bottom"
                src="https://www.efficy.com/wp-content/uploads/2018/12/000000-default-placeholder.png"
              ></Card.Img>
            )}
          </Col>
          <Col lg={8}>
            <Card.Body>
              <Card.Title>
                <h3>{movie.title}</h3>
              </Card.Title>
              <hr />
              <Card.Title>
                <h6>Overview</h6>
              </Card.Title>
              <p>{movie.overview}</p>

              <Row>
                <Col xs={6}>
                  <Card.Title>
                    <h6>Genres</h6>
                  </Card.Title>
                  <p id="genres"></p>
                </Col>

                <Col xs={4}>
                  <Card.Title>
                    <h6>Release date</h6>
                  </Card.Title>
                  <p>{movie.release_date}</p>
                </Col>

                <Col xs={2}>
                  <Card.Title>
                    <h6>Votes </h6>
                  </Card.Title>
                  <p>
                    <i className="fas fa-star"></i>
                    {movie.vote_average}
                  </p>
                </Col>
              </Row>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

export default InfoMovie;
