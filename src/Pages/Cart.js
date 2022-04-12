import { CartContext } from "../Components/Context/CartContext"
import { useContext } from "react"
import ItemDetail from "../Components/ItemDetailContainer/ItemDetail"

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
                              
                            </did>
                    )
                })
        }
    
    </>
    )
}
export default Cart