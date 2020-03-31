import React from 'react';
import { Row } from 'react-bootstrap';
 import CarouselContainer from '../containers/carousel-container';
 
function Home(props){
    return(
        <Row  style={{
            backgroundImage: 'url(/opcion2.jpg)',
            height: '60%', 
            backgroundAttachment: 'fixed',  
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            position: 'relative'
        }}>
             <CarouselContainer/>
        </Row>
    )
}

export default Home;