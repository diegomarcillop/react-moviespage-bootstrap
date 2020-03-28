import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom"; 
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container } from "react-bootstrap";
import "./App.css";
 import NavBar from "./components/navBar"; 
 import Home from "./components/home";
import InfoMovie from "./components/infoMovie";
import MovieContainer from "./containers/movie-container";

function App() {
  return (
    <Router>
      <NavBar />
      <Route path="/" exact>
        <Home />
        <Container
          fluid
          style={{
            backgroundColor: "#152026"
          }}
        >
          <Col>
           <Container style={{ padding: '20px'}}
           fluid="md"
           >
           <MovieContainer />
           </Container>
          </Col>
        </Container>
      </Route>

      <Route path="/infomovie" exact>
        <InfoMovie />
      </Route>

      <Route path="/popular" exact>
          <MovieContainer/>
      </Route>
    </Router>
  );
}

export default App;
