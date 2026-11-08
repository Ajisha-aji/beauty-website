import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import beauty3 from '../assets/beauty3.jpg';
import beauty44 from '../assets/beauty44.avif';
import beauty11 from '../assets/beauty11.avif';
import beauty55 from '../assets/beauty55.avif';
import beauty33 from '../assets/beauty33.avif';
import beauty22 from '../assets/beauty22.jpg';
const  Data = [
  {
    image: beauty3,
    title: 'Lipstick',
    text: 'Some quick example text to build on the card title.'
  },
  {
    image: beauty44,
    title: 'The Ordinary Glycolic Acid',
    text: 'Some quick example text to build on the card title.'
  },
  {
    image: beauty11,
    title: 'Dot & Key Moisturizer',
    text: 'Some quick example text to build on the card title.'
  },
  {
    image: beauty55,
    title: 'The Ordinary Glycolic Acid',
    text: 'Some quick example text to build on the card title.'
  },
  {
    image: beauty33,
    title: 'Neutrogena Moisturizer',
    text: 'Some quick example text to build on the card title.'
  },
  {
    image: beauty22,
    title: 'Cetaphil Skin Cleanser',
    text: 'Some quick example text to build on the card title.'
  }
];

function Product() {
  return (
    <div>
<section id='shop'>
    
       
        <Container >
            <h2 className='brand'>Explore All Brands</h2>
           <Row >
                {
                    Data.map((team,index)=>(
                <Col lg={4} md={6} sm={12}   key={index} className='mt-5'>
                
                        <Card   className='card'>
      <Card.Img variant="top" src={team.image} />
      <Card.Body>
        <Card.Title className='title_card'>{team.title}</Card.Title>
        <Card.Text>
          {team.text}
        </Card.Text>
        <Button variant="primary" className='brand_btn'>Add to cart</Button>
      </Card.Body>
    </Card></Col>
                    ))
                }
    
            </Row>
        </Container>
</section>

    </div>
  )
}

export default Product