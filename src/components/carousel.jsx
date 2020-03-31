import React from "react";
import { Carousel, Container, Button, Row } from "react-bootstrap";

function CarouselC({ movies }) {
  const path = "https://image.tmdb.org/t/p/w500";

  return (
   <Container >
      <Row  style={{
     padding: '10px', 
   }}>
      <Carousel className="mx-auto" style={{
         width: '700px',
         fontFamily: "Fredoka One, Cursive", 
    }}>
     {  
      movies.map((movie, index) => {
         return (
           <Carousel.Item key={index}>
          {   movie.backdrop_path!==undefined ? 
             <img
             className="d-block w-100"
             src={path.concat(movie.backdrop_path)}
             alt="Third slide"
           />: 
           <img
           className=""
           src="https://www.efficy.com/wp-content/uploads/2018/12/000000-default-placeholder.png"
           alt="Third slide" height="10%" width="10%"
         />
        } 
          <Carousel.Caption style={{
            backgroundColor: 'rgba(29, 44, 42, 0.7)',
          }}> 
            <h3>{movie.title}</h3>
           <Button variant="info" href={"/infoMovie/".concat(movie.id) } style={{
                fontFamily: 'Raleway, sans-serif',
                fontWeight: '900' 
           }}>Watch now</Button>
          </Carousel.Caption>
        </Carousel.Item> 
      );
    }) 
     }
  </Carousel>
      </Row>
   </Container>
  );
}


export default CarouselC;
