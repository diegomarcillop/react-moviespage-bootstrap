import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container } from "react-bootstrap";
import "./App.css";
import NavBar from "./components/navBar";
import Home from "./components/home";
import MovieContainer from "./containers/movie-container";
import GenreContainer from "./containers/genre-container";
import InfoMovieContainer from "./containers/infoMovie-container";
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
            <Container style={{ padding: "20px" }} fluid="md">
              <GenreContainer />
              <MovieContainer category="popular" />
            </Container>
          </Col>
        </Container>
      </Route>

      <Route path="/infoMovie/:idMovie" exact>
        <InfoMovieContainer />
      </Route>

      <Route path="/popular" exact>
        <MovieContainer category="popular" />
      </Route>

      <Route path="/premieres" exact>
        <MovieContainer category="premieres" />
      </Route>
    </Router>
  );
}

export default App;
