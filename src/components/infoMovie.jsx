import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function InfoMovie() {
  return (
    <Container>
      <br />
      <Card
        style={{
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          backgroundColor: "#EBEBEB"
        }}
      >
        <Row style={{ padding: "20px", fontFamily: "Fredoka One, Cursive" }}>
          <Col lg={4} style={{}}>
            <Card.Img
              variant="bottom"
              src="https://m.guiadelocio.com/var/guiadelocio.com/storage/images/cine/archivo-peliculas/joker/37325380-8-esl-ES/joker.jpg"
            ></Card.Img>
          </Col>
          <Col lg={8}>
            <Card.Body>
              <Card.Title>
                <h3>El Joker (2019)</h3>
              </Card.Title>
              <hr />
              <Card.Title>
                <h5>Visión general</h5>
              </Card.Title>
              <p>
                Después de que un experimento científico llevara a la creación
                de un clon de Mewtwo, él decide destruir el mundo. Ahora Ash y
                sus amigos deben intentar detener los planes malignos de Mewtwo.
              </p>
              <Card.Title>
                <h6>Genero</h6>
              </Card.Title>
              <p>Animación | Acción | Familiar</p>
              <Card.Title>
                <h6>Director</h6>
              </Card.Title>
              <p>Motonori Sakakibara</p>
              <Button variant="success" size="sm">
                <i class="far fa-play-circle"></i> Reproducir Trailer
              </Button>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

export default InfoMovie;
