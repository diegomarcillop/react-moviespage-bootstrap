import React from "react";
import { Nav, NavDropdown, Container, Form, Row, Col } from "react-bootstrap";
const years = [2020, 2019, 2018, 2017];

function Genres({ genres }) {
  function OnChange(evt) {
    console.log(evt.target.value);
  }

  return (
    <Container fluid>
      <Nav
        activeKey="/home"
        style={{
          fontFamily: "Fredoka One, Cursive",
          color: "white",
          textAlign: "center"
        }}
      >
        <Nav.Item
          className="ml-auto"
          style={{
            paddingRight: "40px"
          }}
        >
          <Form.Group as={Row} controlId="exampleForm.ControlSelect1">
            <Form.Label column sm="3">
              Genres
            </Form.Label>

            <Col sm="8">
              <Form.Control
                as="select"
                size="sm"
                style={{
                  fontFamily: "Raleway, sans-serif",
                  backgroundColor: "#26545c",
                  color: "white"
                }}
                onChange={OnChange}
              >
                <option></option>
                {genres.map(genre => {
                  console.log(genre);
                  return <option key={genre.id}>{genre.name}</option>;
                })}
              </Form.Control>
            </Col>
          </Form.Group>
        </Nav.Item>
      </Nav>
    </Container>
  );
}
export default Genres;
