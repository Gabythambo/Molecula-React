import { CartContext } from "../Components/Context/CartContext"
import { useContext } from "react"
import ItemDetail from "../Components/ItemDetailContainer/ItemDetail"

const Cart = ()=>{
    const {cartArray, delItem}=useContext(CartContext)
    const {name,id,thumbnail,cantidad}=cartArray

    return(
      <>    
        {      
                 cartArray.map((items) =>{
              
                        
                    return (  
                            <did key={items.id} className="blanco">
                              <p>nombre {items.name}</p>
                              <p>id{items.id}</p>
                              <p>{items.thumbnail}</p>
                            </did>
                    )
                })
        }
    
    </>
    )
}
export default Cart