import { createContext, useState } from "react";

export const CartContext = createContext()

const CartProvider = ({children}) =>{
    
    const [cartArray,setCartArray] = useState([]);
    console.log(cartArray)
    
        const addProduct =(name,cantidad,price,id)=>{
             const newproduct= {
                                name,
                                cantidad,
                                price,
                                id
            }

            
            console.log(`agregaste ${cantidad} ${name} ${price} ${id}`)
            setCartArray([...cartArray,newproduct])
            console.log(cartArray)
            
        }

        const delItem=(id)=>{
            const newArray = cartArray.filter(element => element.id !== id)
            setCartArray(newArray)
        }

        const clearCart=()=>{
            setCartArray([])
        }
 
        const isInCart=(id)=>{
            return cartArray.some(element => element.id === id)
            
        }


    // const cartArray=useContext(CartContext) hook al context

    const value = {
        cartArray,
        addProduct,
        delItem
    }

    return(
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
            
        
    )
} 
export default CartProvider;

