import React from 'react';
import { Row } from 'react-bootstrap';
import CarouselC from './carousel';
 
function Home(props){
    return(
        <Row  style={{
            backgroundImage: 'url(/opcion2.jpg)',
            height: '500px', 
            backgroundAttachment: 'fixed',  
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            position: 'relative'
        }}>
            
        <CarouselC/>
        </Row>
    )
}

export default Home;