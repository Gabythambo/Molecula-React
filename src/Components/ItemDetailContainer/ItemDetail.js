import './ItemDetail.css'

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
<div className="container">
		<div className="cardDetail">
			<div className="container-fliud">
				<div className=".wrapperDetail row">
					<div className="preview preview-pic col-md-6 tab-content">
						
						
						  <img className='imgDetail' src={thumbnail} />
						  
						
					</div>
					<div className="details col-md-6">
						<h3 className="product-title">{name}</h3>
						<div className="rating">
							<div className="stars">
								<span className="fa fa-star checked"></span>
								<span className="fa fa-star checked"></span>
								<span className="fa fa-star checked"></span>
								<span className="fa fa-star"></span>
								<span className="fa fa-star"></span>
							</div>
							<span className="review-no">41 reviews</span>
						</div>
						<p className="product-description">{description}</p>
						<h4 className="price">current price: <span>${price}</span></h4>
						<p className="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
						
						<div class="action">
						
              {inCart ? 
			  <><Link to={`/cart`}><button class="add-to-cart btn btn-default">Got to Cart</button></Link> 
			  <Link to={`/`}><button class="add-to-cart btn btn-default">Got to Home</button></Link> </>
			  :
			  <ItemCounter stock={stock} countItem={1} onAdd={onAdd}/>}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>


    //   <div className="item ">
    //   <Col sm={5} >
    //     <Image className='img-fluid ' src={thumbnail}></Image>
    //   </Col>
    //   <Col className="info">
    //     <h2>{name}</h2>
    //     <br />
    //     <br />
    //     <p>{description}</p>
    //     <Row className="">
    //     <Col >
    //         <p>Available bag:</p> 
    //         <Button className='btn' onClick={() => setsize("#E9D985")}>1/4kg</Button>
    //         <Button className='btn' onClick={() => setsize("#E9D985")}>1/2kg</Button>
    //         <Button className='btn' onClick={() => setsize("#E9D985")}>1kg</Button>
    //       </Col>
    //       <Col style={{ textAlign: "center" }}>
    //         <p>Price u.: $ {price}</p>
    //         {inCart ? <Link to={`/cart`}><Button>Got to Cart</Button></Link> :<ItemCounter stock={stock} countItem={1} onAdd={onAdd}/>}
            
    //      </Col>
    //     </Row>
    //   </Col>
    // </div>
)
    

    }
export default ItemDetail

