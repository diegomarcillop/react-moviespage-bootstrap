import React from "react";
import Card from "react-bootstrap/Card";
import { Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Movie({ title, image, range, overview }) {
  const path = "https://image.tmdb.org/t/p/w500";

  return (
    <Row style={{ padding: "10%" }}>
      <Card
        style={{
          textAlign: "left",
          width: "14rem",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          fontFamily: "Raleway, sans-serif"
        }}
      >
        <Link to="/infomovie">
          <Card.Img variant="top" src={path.concat(image)} />
        </Link>
        <Card.Body
          style={{
            position: "absolute",
            backgroundColor: "rgba(7, 39, 41, 0.900)",
            width: "100%",
            opacity: "0",
            transitionDuration: "0.4s",
            height: "100%",
            zIndex: "0"
          }}
        >
          <Link to="/infomovie">
            <Card.Title>
              <h6>{title}</h6>
            </Card.Title>
            <div className="overview">
              <p>{overview}</p>
            </div>
            <i className="fas fa-star"></i>
            {range} /10
          </Link>
        </Card.Body>
      </Card>
    </Row>
  );
}

export default Movie;
