import { createContext, useState } from "react";

export const CartContext = createContext()

const CartProvider = ({children}) =>{
    
    const [cartArray,setcartArray] = useState([]);
      
      const addProduct =(itemDetail,cantidad)=>{
        console.log(`agregaste ${cantidad} ${itemDetail}`)
      }
    // const cartArray=useContext(CartContext) hook al context

    const value = {
        cartArray,
        addProduct,
    }

    return(
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
            
        
    )
} 
export default CartProvider;

