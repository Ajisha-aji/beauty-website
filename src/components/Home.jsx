import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import beauty1 from '../assets/beauty3.jpg';
import beauty2 from '../assets/beauty4.jpg';
import beauty3 from '../assets/beauty6.jpg';
import About from './About';
import Product from './Product';
import Form from '../components/Form';
import Footer from './Footer';


function Home() {
  return (
    <div>
  
        <section className='bg1' >
     
      <Row>
        <Col >
        <Carousel className='caro'>
      <Carousel.Item >
        <img src={beauty2}  alt="Beauty" className='img-fluid'/>
        <Carousel.Caption className='head'>
          <h2>Glow. Glam. Repeat.</h2>
          <p>Everything you need to enhance your everyday beauty.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={beauty1} className="img-fluid" alt="Beauty" />
        <Carousel.Caption className='head'>
          <h2 >Beauty Begins With You</h2>
          <p>Feel beautiful, feel confident, and let your natural glow shine.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <img src={beauty3} className="d-block " alt="Beauty"/>
        <Carousel.Caption className='head'>
          <h2>Unveil Your Natural Glow</h2>
          <p>
           Discover beauty that makes you feel confident, radiant, and effortlessly you.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel></Col>
      </Row>
   
        </section>
        <About/>
        <Product/>
        <Form/>
    </div>
  )
}

export default Home

