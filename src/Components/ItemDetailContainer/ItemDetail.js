import './ItemDetail.css'
import  Button from '@mui/material/Button';
import ItemCounter from '../ItemCounter/itemCounter';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';

const ItemDetail = ({name,thumbnail,price,stock,description,id,category,region,})=>{ 
   
const [inCart,setInCart]=useState(false)   
  const {addProduct} =useContext(CartContext)

   function onAdd(cantidad){
      setInCart(true) 
      addProduct({name,thumbnail,price,stock,description,id,category,region,cantidad})
   }
      

   
    return(
     
<section id="services" className="services section-bg">
   <div className="container-fluid">
      <div className="">
         <div className="">
            <div className="">
               <div className="">
                  <img className="" src={thumbnail} alt="" />
               </div>
            </div>
         </div>
         <div className="">
            <div className="_product-detail-content">
               <p className="_p-name"> {name} </p>
               <div className="_p-features">
                     <p>{description}</p>        
                  </div>
               <div className="_p-price-box">
                  <div className="p-list">
                     <span> {price} : <i className="fa fa-dollar"></i> <del> {price}  </del>   </span>
                     <span className="price"> {price} </span>
                  </div>
                  <div className="_p-add-cart">
                     <div className="_p-qty">
                    {inCart ? <Link to={`/cart`}><Button>Got to Cart</Button></Link> :<ItemCounter stock={stock} countItem={1} onAdd={onAdd}/>}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
)
    

    }
export default ItemDetail

