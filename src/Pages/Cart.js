import { CartContext } from "../Components/Context/CartContext"
import { useContext } from "react"
import { Button } from "@mui/material"

const Cart = ()=>{
    const {cartArray, delItem}=useContext(CartContext)
    

    return(
      <>    
        {      
                 cartArray.map((items) =>{
              
                        
                    return (  
                            <did key={items.id} className="blanco">
                              <img src={items.thumbnail}/>
                              <p>nombre {items.name}</p>
                              <p>id{items.id}</p>
                            <Button onClick={()=> delItem(items.id)} >eliminar</Button>
                            </did>
                    )
                })
        }
    
    </>
    )
}
export default Cart