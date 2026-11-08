
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
    return (
        <footer className="footer">
            <Container>
                <Row className="py-4">

                    <Col md={4} className="mb-3">
                        <h3>Aura Beauty</h3>
                        <p>
                            Enhance your natural beauty
                            with <br />  products made for you.
                        </p>
                    </Col>

                    <Col md={4} className="mb-3">
                        <h5>Quick Links</h5>
                        <ul className="footer-links">
                            <li><a href="#Home">Home</a></li>
                            <li><a href="#About">About Us</a></li>
                            <li><a href="#shop">shop</a></li>
                            <li><a href="#Contactus">Contact Us</a></li>
                        </ul>
                    </Col>

                    <Col md={4} className="mb-3">
                        <h5>Contact Us</h5>
                        <p>
                            <i className="bi bi-envelope"></i>
                           <span> support@aurabeauty.com</span>
                        </p>
                        <p>
                            <i className="bi bi-telephone"></i>
                           <span> +91 5678923423</span>
                        </p>
                         <i className="bi bi-geo-alt"></i>
                          <span>12,street park road, TamilNadu-987004</span>
                       
                    </Col>

                </Row>

                <hr />

                <p className="text-center copyright">
                    © 2026 Aura Beauty. All rights reserved.
                </p>
            </Container>
        </footer>
    );
}

export default Footer;
