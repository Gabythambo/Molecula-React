import { CartContext } from "../Components/Context/CartContext"
import { useContext } from "react"
import { Button } from "@mui/material"
import { Link } from "react-router-dom"

const Cart = ()=>{
    const {cartArray, delItem, total, clearCart}=useContext(CartContext)
    
    return(
      <div className="ContainerProducts">    
        <h1>CART</h1>

{
                (cartArray.length === 0 )
                &&
                <>
                <p>El carrito esta vacio</p>
                <Link to="/"> <Button>sVolver al Home</Button></Link>
                </>

}
{      
                 cartArray.map((items) =>{
              
                    return (  
                            <did  key={items.id} >
                              <img src={items.thumbnail}/>
                              <p>nombre {items.name}</p>
                            <Button onClick={()=> delItem(items.id)} >eliminar</Button>
                            <p>precio unitario  {items.price}</p>
                            </did>
                    )
                })
 }





{
       (cartArray.length >=1)
       &&
       <>
        <p>total  {total()}</p> 
        <Link to="/cart"> <Button onClick={()=>clearCart()}>Vaciar carrito</Button></Link>  
        <Link to="/*"> <Button onClick={()=>clearCart()}>finalizar Compra</Button></Link>  
        </>
        }
        
    </div>

)
}
export default Cart