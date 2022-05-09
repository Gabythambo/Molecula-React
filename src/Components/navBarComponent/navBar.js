import * as React from 'react';
import  Button  from '@mui/material/Button';
import CartWidget from '../cartWidget/carWidget'
import { Link } from 'react-router-dom';
// import MenuListComposition from '../menuListComposition/MenuListComposition';
import Badge from '@mui/material/Badge';
import { useContext } from 'react';
import { CartContext } from "../Context/CartContext"
import "./navBar.css"

import { Navbar,Container,Nav,NavDropdown } from 'react-bootstrap';

export default function NavBar()  {
    const {badge,cartArray,delItem}=useContext(CartContext)
    // const {name,thumbnail,price,id,cantidad}=cartArray

        return(
        <>
<Navbar expand="xxl" sticky="top" bg="dark" variant="dark">
  <Container> 
    <Navbar.Brand href="/">Molecula</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Link to="/" className='nav-link'>Home</Link>
        <Link to="#link" className='nav-link'>Quiz</Link>
        <NavDropdown title="Regiones" id="basic-nav-dropdown">
        <NavDropdown.Item href="/region/South America">South America</NavDropdown.Item>
          <NavDropdown.Item href="/region/Central America">Central America</NavDropdown.Item>
          <NavDropdown.Item href="/region/Africa">Africa</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/region/China">China</NavDropdown.Item>
        </NavDropdown>
        <Link to="#link" className='nav-link'>Contact</Link>         
      </Nav>  
      </Navbar.Collapse>
      <Badge badgeContent={badge()} color="success" className=''><Button className="button" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="bi"></span>
            <CartWidget/></Button></Badge>   
  </Container>
  </Navbar>

<div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                      <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Cart</h5>
                      <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                    <div className="row gutter-3">

{                        
                              
                 cartArray.map((items) =>{
                    return ( 
                    <div className="col-12" key={items.id}>
                    <div className="cart-item cart-item-sm">
                      <div className="row align-items-center">
                        <div className="col-lg-9">
                          <div className="media media-product">
                            <a href=''><img className='media-product' src={items.thumbnail} alt="Image" /></a>
                            <div className="media-body">
                              <h5 className="media-title">{items.name}</h5>
                              <span className="media-subtitle">{items.name}</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 text-center text-lg-right">
                          <span className="cart-item-price">${items.price}</span>
                        </div>
                        <button onClick={()=>{delItem(items.id)}} className="cart-item-close"><i className="bi bi-x" ></i></button>
                      </div>
                    </div>
                  </div>
                    )
                })
 }
                    
                  </div>
                      <div className="container">
                        <hr />
                          <div className="row gutter-0">
                            <div className="col">
                            <Link className='btn btn-md btn-block btn-secondary' to={'/cart'} >Checkout</Link>
                            </div>
                          </div>
                        </div>
                    </div>
                  </div>
        </>
        )
}

