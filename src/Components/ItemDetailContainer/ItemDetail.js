import './ItemDetail.css'
import  Button from '@mui/material/Button';
import ItemCounter from '../ItemCounter/itemCounter';

const ItemDetail = ({name,thumbnail,price,stock,id})=>{    

   

    return(
     
<section id="services" className="services section-bg">
   <div classNameName="container-fluid">
     <div className="col-sm-12 text-center mb-4">
       <a className="btn btn-primary" target="" href=""> COMPRAR "{name}" Ahora </a>
     </div>
      <div className="row row-sm">
         <div className="col-md-6 _boxzoom">
            
            <div className="_product-images">
               <div className="picZoomer">
                  <img className="my_img img-responsive" src={thumbnail} alt="" />
               </div>
            </div>
         </div>
         <div className="col-md-6">
            <div className="_product-detail-content">
               <p className="_p-name"> {name} </p>
               <div className="_p-features">
                     <span> Description About this product:- </span>
                     Solid color polyester/linen full blackout thick sunscreen floor curtain
                     Type: General Pleat
                     Applicable Window Type: Flat Window
                     Format: Rope
                     Opening and Closing Method: Left and Right Biparting Open
                     Processing Accessories Cost: Included
                     Installation Type: Built-in
                     Function: High Shading(70%-90%)
                     Material: Polyester / Cotton
                     Style: ClassNameic
                     Pattern: Embroidered
                     Location: Window
                                          
                  </div>
               <div className="_p-price-box">
                  <div className="p-list">
                     <span> PRECIO : <i className="fa fa-dollar"></i> <del> {price}  </del>   </span>
                     <span className="price"> {price} </span>
                  </div>
                  <div className="_p-add-cart">
                     <div className="_p-qty">
                        
                    <ItemCounter stock={stock} countItem={1} /*onAdd={onAdd}*/   />
                    
                     </div>
                  </div>
                 
                   <form action="" method="post" accept-charset="utf-8">
                     <ul className="spe_ul"></ul>
                     <div className="_p-qty-and-cart">
                        <div className="_p-add-cart">
                           <Button className="btn-theme btn buy-btn" >
                           <i className="fa fa-shopping-cart"></i>  Comprar
                           </Button>
                          
                           <input type="hidden" name="pid" value="18" />
                           <input type="hidden" name="price" value="850" />
                           <input type="hidden" name="url" value="" />    
                        </div>
                     </div>
                  </form> 
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
)
    

    }
export default ItemDetail

