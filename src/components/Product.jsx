import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
const Data=[
    {
        image:'/src/assets/beauty3.jpg',
        title:'Lipstick',
        text:' Some quick example text to build on the card title and make up the bulk of the card content.',

    },
     {
        image:'/src/assets/beauty44.avif',
        title:'The Ordinary Glycolic Acid',
        text:' Some quick example text to build on the card title and make up the bulk of the card content.',
 
    },
    {
        image:'/src/assets/beauty11.avif',
        title:'Dot & Key Moisturizer',
        text:' Some quick example text to build on the card title and make up the bulk of the card content.',
 
    },
    {
        image:'/src/assets/beauty55.avif',
        title:'The Ordinary Glycolic Acid',
        text:' Some quick example text to build on the card title and make up the bulk of the card content.',
 
    }
    ,
    
     {
        image:'/src/assets/beauty33.avif',
        title:'Neutrogena Moisturizer',
        text:' Some quick example text to build on the card title and make up the bulk of the card content.',
 
    },
    {
         image:'/src/assets/beauty22.jpg',
        title:' Cetaphil Skin Cleanser',
        text:' Some quick example text to build on the card title and make up the bulk of the card content.',
 
       
    }
]

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