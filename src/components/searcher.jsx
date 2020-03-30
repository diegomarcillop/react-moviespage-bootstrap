import React from "react";
import { Form, FormControl, Button, Col } from "react-bootstrap";

function Seacher(props) {
  return (
    <Col className="w-100" lg={12}>
      <Form
        inline
        style={{
          justifyContent: "center",
          fontFamily: "Raleway, sans-serif",
          marginTop: "50px",
          marginBottom: "50px",
          paddingRight: "10px"
        }}
      >
        <FormControl
          size="sm"
          type="text"
          placeholder="Buscar..."
          className="mr-sm-2"
          style={{
            width: "30%"
          }}
        />
        <Button size="sm" variant="info">
          <i className="fas fa-search"></i>
        </Button>
      </Form>
    </Col>
  );
}

export default Seacher;
