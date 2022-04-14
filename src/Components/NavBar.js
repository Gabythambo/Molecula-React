import * as React from 'react';
import  Button  from '@mui/material/Button';
import CartWidget from './cartWidget/carWidget'
import { Link } from 'react-router-dom';
// import "./NavBar/NavBar.css"
import MenuListComposition from './MenuListComposition/MenuListComposition';
import Badge from '@mui/material/Badge';
import { useContext } from 'react';
import { CartContext } from "../Components/Context/CartContext"
import "./NavBar/cart.css"


export default function NavBar()  {
    const {badge,cartArray}=useContext(CartContext)
    const {name,thumbnail,price,id,cantidad}=cartArray

        return(
        <>
          
           <header className='App-header'>
           <div className="app">
              
              <nav class="navbar navbar-light bg-light fixed-top">
                <div class="container-fluid">
                <div>
            <h2><Link to={'/'}>Molecula</Link></h2>
            </div>
           
            <ul>
                <Button><Link className='color' to={'/'}>Home</Link></Button>
                <Button><MenuListComposition>Regiones</MenuListComposition></Button>
                <Button><Link className='color' to={''}>Quiz</Link></Button>
                <Button><Link className='color' to={'/contact'} >Contacto</Link></Button>
                
            </ul>
            <Badge badgeContent={badge()} color="success"><button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span class="bi bi-cart-dash-fill"></span>
                    <CartWidget/></button></Badge> 
                  
                  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                      <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Cart</h5>
                      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                    <div class="row gutter-3">





{                        
                              
                 cartArray.map((items) =>{
                    return ( 
                    <div className="col-12" key={items.id}>
                    <div class="cart-item cart-item-sm">
                      <div class="row align-items-center">
                        <div class="col-lg-9">
                          <div class="media media-product">
                            <a href="#!"><img src={items.thumbnail} alt="Image" /></a>
                            <div class="media-body">
                              <h5 class="media-title">{items.name}</h5>
                              <span class="media-subtitle">{items.name}</span>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-3 text-center text-lg-right">
                          <span class="cart-item-price">${items.price}</span>
                        </div>
                        <a href="#!" class="cart-item-close"><i class="bi bi-x"></i></a>
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


                        
                        {/* <div class="col-12">
                          <div class="cart-item cart-item-sm">
                            <div class="row align-items-center">
                              <div class="col-lg-9">
                                <div class="media media-product">
                                  <a href="#!"><img src="https://therichpost.com/wp-content/uploads/2020/06/jeans2.jpg" alt="Image" /></a>
                                  <div class="media-body">
                                    <h5 class="media-title">jeans 2</h5>
                                    <span class="media-subtitle">Red</span>
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-3 text-center text-lg-right">
                                <span class="cart-item-price">$120</span>
                              </div>
                              <a href="#!" class="cart-item-close"><i class="bi bi-x"></i></a>
                            </div>
                          </div>
                        </div> */}
                        {/* <div class="col-12">
                          <div class="cart-item cart-item-sm">
                            <div class="row align-items-center">
                              <div class="col-lg-9">
                                <div class="media media-product">
                                  <a href="#!"><img src="https://therichpost.com/wp-content/uploads/2020/06/jeans1.jpg" alt="Image" /></a>
                                  <div class="media-body">
                                    <h5 class="media-title">jeans 3</h5>
                                    <span class="media-subtitle">Black</span>
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-3 text-center text-lg-right">
                                <span class="cart-item-price">$132</span>
                              </div>
                              <a href="#!" class="cart-item-close"><i class="bi bi-x"></i></a>
                            </div>
                          </div>
                        </div> */}
                      </div>
                      <div class="container">
                        <hr />
                          <div class="row gutter-0">
                            <div class="col">
                            <Link className='btn btn-md btn-block btn-secondary' to={'/cart'} >View Cart</Link>
                              {/* <a href="http://localhost:3000/cart" class="">View Cart</a> */}
                            </div>
                            <div class="col">
                              <a href="checkout.html" class="btn btn-md btn-block btn-primary">Checkout</a>
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
