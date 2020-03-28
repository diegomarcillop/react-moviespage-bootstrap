import React from "react";
import { Nav, Button, Row, Col, ButtonGroup, Container } from "react-bootstrap";
const years = [2020, 2019, 2018, 2017];

function Options() {
  const years = [2020, 2019, 2018, 2017, 2016];
  const genders = ["Ciencia Ficción (34)", "Comedia (13) ", " Drama (30)", "Animación (20) "];

  return (
    <Nav
      style={{
        fontFamily: "Raleway', sans-serif",
        backgroundColor: "#152026",
        color: "white",
        alignItems: "center" 
      }}
      defaultActiveKey="/home"
      className="flex-column h-100"
    >
      <h6 className="title-category">Generos</h6>
      <Container fluid >
        <Row >
          {genders.map(year => (
            <Col className="years"  >
              <Button variant="primary" size="sm" block>
                {year}
              </Button>
            </Col>
          ))}
        </Row>
      </Container>


      <h6 className="title-category">Años</h6>
      <Container fluid >
        <Row >
          {years.map(year => (
            <Col className="years"  >
              <Button variant="dark" size="sm" block>
                {year}
              </Button>
            </Col>
          ))}
        </Row>
      </Container>
    </Nav>
  );
}
export default Options;
