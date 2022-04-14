import * as React from 'react';
// import  Button  from '@mui/material/Button';
import CartWidget from '../cartWidgetComponent/cartWidget'
import { Link } from 'react-router-dom';
import MenuListComposition from '../menuListComposition/MenuListComposition';
import Badge from '@mui/material/Badge';
import { useContext } from 'react';
import { CartContext } from "../Context/cartContext"
import "./navBar.css"
import { Button } from 'react-bootstrap';


export default function NavBar()  {
    const {badge,cartArray}=useContext(CartContext)
    const {name,thumbnail,price,id,cantidad}=cartArray

        return(
        <>
          
           <header className='App-header'>
           
           <div className="app">
              
              <nav class="navbar navbar-light bg-light fixed-top">
                <div className="container-fluid">
                <div>
            <h2><Link to={'/'}>Molecula</Link></h2>
            </div>
           
            <ul>
                <li><Link className='color' to={'/'}>Home</Link></li>
                <li><MenuListComposition>Regiones</MenuListComposition></li>
                <li><Link to={''}>Quiz</Link></li>
                <li><Link to={'/contact'}>Contacto</Link></li>
                
            </ul>
            <Badge badgeContent={badge()} color="success"><button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="bi bi-cart-dash-fill"></span>
            <CartWidget/></button></Badge> 
                  
                  <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                      <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Cart</h5>
                      <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                    <div class="row gutter-3">





{                        
                              
                 cartArray.map((items) =>{
                    return ( 
                    <div className="col-12" key={items.id}>
                    <div className="cart-item cart-item-sm">
                      <div className="row align-items-center">
                        <div className="col-lg-9">
                          <div className="media media-product">
                            <a href="#!"><img src={items.thumbnail} alt="Image" /></a>
                            <div className="media-body">
                              <h5 className="media-title">{items.name}</h5>
                              <span className="media-subtitle">{items.name}</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 text-center text-lg-right">
                          <span className="cart-item-price">${items.price}</span>
                        </div>
                        <a href="#!" className="cart-item-close"><i className="bi bi-x"></i></a>
                      </div>
                    </div>
                  </div>
                    )
                     
                            // <did  key={items.id} >
                            //   <img src=/>
                            //   <p>nombre </p>
                            // <Button onClick={()=> delItem(items.id)} >eliminar</Button>
                            // <p>precio unitario  {items.price}</p>
                            // </did>



                    
                })
 }


                        
                        {/* <div className="col-12">
                          <div className="cart-item cart-item-sm">
                            <div className="row align-items-center">
                              <div className="col-lg-9">
                                <div className="media media-product">
                                  <a href="#!"><img src="https://therichpost.com/wp-content/uploads/2020/06/jeans2.jpg" alt="Image" /></a>
                                  <div className="media-body">
                                    <h5 className="media-title">jeans 2</h5>
                                    <span className="media-subtitle">Red</span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-3 text-center text-lg-right">
                                <span className="cart-item-price">$120</span>
                              </div>
                              <a href="#!" className="cart-item-close"><i className="bi bi-x"></i></a>
                            </div>
                          </div>
                        </div> */}
                        {/* <div className="col-12">
                          <div className="cart-item cart-item-sm">
                            <div className="row align-items-center">
                              <div className="col-lg-9">
                                <div className="media media-product">
                                  <a href="#!"><img src="https://therichpost.com/wp-content/uploads/2020/06/jeans1.jpg" alt="Image" /></a>
                                  <div className="media-body">
                                    <h5 className="media-title">jeans 3</h5>
                                    <span className="media-subtitle">Black</span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-3 text-center text-lg-right">
                                <span className="cart-item-price">$132</span>
                              </div>
                              <a href="#!" className="cart-item-close"><i className="bi bi-x"></i></a>
                            </div>
                          </div>
                        </div> */}
                      </div>
                      <div className="container">
                        <hr />
                          <div className="row gutter-0">
                            <div className="col">
                            <Link className='btn btn-md btn-block btn-secondary' to={'/cart'} >View Cart</Link>
                              {/* <a href="http://localhost:3000/cart" className="">View Cart</a> */}
                            </div>
                            <div className="col">
                              <a href="checkout.html" className="btn btn-md btn-block btn-primary">Checkout</a>
                            </div>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
              </nav>
          </div>
            </header>
        
        </>
        )
}

