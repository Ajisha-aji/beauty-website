import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import AppBar from './components/AppBar';
import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';
import Form from './components/Form';
import Footer from './components/Footer';
import {BrowserRouter as Router, Routes,Route,Link} from 'react-router-dom';
import Table from './components/Table';

function App() {
  return (
    <div>
     <Router> 
     <AppBar/>
    <Routes>
       
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path="/form" element={<Form/>}/>
       <Route path="/table" element={<Table/>}/>

    </Routes>

    </Router>
    </div>
  )
}

export default App