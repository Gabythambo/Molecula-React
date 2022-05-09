import { createContext, useState } from "react";


export const CartContext = createContext()

const CartProvider = ({children}) =>{
    
    const [cartArray,setCartArray] = useState([]);
    console.log(cartArray)
    
        const addProduct =(addProduct)=>{
            const {name,thumbnail,price,id,cantidad}=addProduct
                const newproduct= {
                name,
                id,                 
                cantidad,
                price,
                thumbnail,                
                }

            
            if(  isInCart(newproduct.id) ) {

                console.log('ya esta en el carrito')
               const repeated = cartArray.find( (p) => p.id === newproduct.id )
                const {cantidad} = repeated
                repeated.cantidad = newproduct.cantidad + cantidad
                const newCartArray = [...cartArray]
                setCartArray(newCartArray)
                badge()

            }else  {

                setCartArray([...cartArray,newproduct]) 
                badge(newproduct.cantidad)
               
            }
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

        const badge=()=>{
            return cartArray.reduce( (acum,prod) => acum += prod.cantidad,0)
        }

        const total=()=>{
            return cartArray.reduce( (acum,prod)=>acum = acum + (prod.cantidad * prod.price),0 )
        }

    const value = {
        cartArray,
        addProduct,
        delItem,
        clearCart,
        isInCart,
        badge,
        total
    }

    return(
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
            
        
    )
} 
export default CartProvider;

