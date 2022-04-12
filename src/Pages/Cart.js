import { CartContext } from "../Components/Context/CartContext"
import { useContext } from "react"

const Cart = ()=>{
    const {cartArray, delItem}=useContext(CartContext)
    
    return(
      
        <article >hola
          
        {console.log(cartArray)}
      </article>
    )
}
export default Cart