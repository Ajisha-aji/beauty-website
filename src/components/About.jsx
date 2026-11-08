import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Buttn from './Buttn';
import beauty5 from '../assets/beauty5.jpg';

function About() {
  return (
    <section  className="py-5">
      <Container>
        <Row className="align-items-center">

          <Col md={6} className='order-2'>
            <h2 className='mb-5 About_title d-none d-md-block'>About Aura Beauty</h2>

            <p className='mt-5'>
              At Aura Beauty, we believe that beauty is all about
              confidence, self-love, and expressing your unique style.
              We bring you carefully selected beauty essentials
              designed to make you feel beautiful every day.
              We bring you carefully selected beauty essentials
              designed to make you feel beautiful every day.
            </p>
            <Buttn/>
          </Col>

          <Col md={6} className='order-1 mt-5 mt-md-0'>
          <h2 className='mb-5 About_title d-md-none d-block'>About Aura Beauty</h2>
            <img
              src={beauty5} alt="Aura Beauty" className="img-fluid card p-2"
            />
          </Col>

        </Row>
      </Container>
    
    </section>
  );
}

export default About;