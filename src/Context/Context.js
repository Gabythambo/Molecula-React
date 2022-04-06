import { createContext, useState } from "react";

const context = createContext()

const CartContext = ({children}) =>{
    const [estado,setEstado] = useState([])
    
    const cambiarcontext =()=>{
    console.log(estado)
    }
    

    return(
        console.log("algo hago")
    )
} 
export {CartContext};
export default context;
