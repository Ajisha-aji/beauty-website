import React, { useState } from 'react'
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Table from './Table';
import {  useNavigate } from 'react-router-dom';

function Form() {
    const [input, setinput] = useState({});
    const [data, setdata] = useState([]);
    const Navigate=useNavigate();
    function handlesubmit(e) {
        e.preventDefault()
         setdata((prevdata) => [...prevdata, input]);
    setinput({});
    
        
    }
    function handlechange(e) {
        const name = e.target.name;
        const value = e.target.value;
        setinput((prevstate) => ({ ...prevstate, [name]: value }))
         
    }
    if(data){
        Navigate('/')
    }
    return (
        <div id='Contactus'>
            <Container className='mt-5'>
                <Row >
                    <Col className='formtitle mt-2'>
                        <h2 className='mt-5 colormsg'>Contact Information</h2>
                        <Row className='form1 mt-4 '>
                            <Col sm={1} className='form2'><i className="bi bi-envelope"></i></Col>
                            <Col sm={11}><h5>email address</h5>
                                <p className='text-muted'>support@aurabeauty.com</p></Col>
                        </Row>
                        <Row className='form1'>
                            <Col sm={1} className='form2'><i className="bi bi-telephone"></i></Col>
                            <Col sm={11}><h5>Phone Number</h5>
                                <p className='text-muted'>+91 5678923423</p></Col>
                        </Row>
                        <Row className='form1'>
                            <Col sm={1} className='form2'><i className="bi bi-geo-alt"></i></Col>
                            <Col sm={11}> <h5>Store Address</h5>
                                <p className='text-muted'>12,street park road, <br />TamilNadu-987004</p></Col>
                        </Row>
                    </Col>
                    <Col>

                        <form action="" onSubmit={handlesubmit}>
                            <h2 className='colormsg'>Send Us a Message</h2>
                            <label htmlFor="">Name</label>
                            <input type="text"  value={input.name || ''} name='name' onChange={handlechange} placeholder='Name' />
                            <br />
                            <label htmlFor="">email</label>
                            <input type="email"   value={input.email || ''} name='email' onChange={handlechange} placeholder='email'/>
                            <br />
                            <label htmlFor="">subject</label>
                            <input type="text" value={input.subject || ''} name='subject' onChange={handlechange} placeholder='Subject'/>
                            <br />
                            <label htmlFor="">Message</label>
                            <input type="text" value={input.Message || ''} className='mesg' name='Message' onChange={handlechange} placeholder='Message'/>
                            <br />
                            <input type="submit" value="Submit" className='submit' />
                        </form></Col>
                </Row>
            </Container>
            <Table  data={data}/>
            
        </div>
    )
}

export default Form
