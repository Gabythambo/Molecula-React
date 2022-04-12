import { CartContext } from "../Components/Context/CartContext"
import { useContext } from "react"
import ItemDetail from "../Components/ItemDetailContainer/ItemDetail"

const Cart = ()=>{
    const {cartArray, delItem}=useContext(CartContext)
    const {name,id}=cartArray

    return(
      <>    
        {      
                 cartArray.map((items) =>{
              
                      
                    return (
                            <ItemDetail key={items.id}
                            name={items.name}
                            thumbnail={items.thumbnail}
                            price={items.price}
                            stock={items.stock}
                            id={items.id}
                            description={items.description}
                            category={items.category}
                            region={items.region}
    
                            />
                
                    )
                })
        }
    
    </>
    )
}
export default Cart