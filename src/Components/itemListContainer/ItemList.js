import { useEffect, useState } from 'react'
import Item from '../Card/Item'
import { data } from '../Data/data.js'
import ItemCounter from "../ItemCounter/itemCounter";


const ItemList = () =>{
    
const [products,setProducts]=useState([])

const getProducts= new Promise ((resolve,reject) =>{
        setTimeout(()=>{
            resolve(data);
        },
        2000);
    })
    
    const getProductsData = async ()=>{
try{
    const resultado = await getProducts;
    setProducts(resultado)
} catch (err){
    console.log(err)
}

}

useEffect(()=>{
    getProductsData()
},); // si uso array vacio me da error

function onAdd(cantidad){
    console.log(`agregaste ${cantidad}`)
  }   
 

return(
    <div className='wrapper'>
        {
        
                products.map((product) =>{
                    return (
                        <div key={product.id}>
                        <Item
                          name={product.name}
                          thumbnail={product.thumbnail}
                          price={product.price}
                          stock={product.stock}
                          id={product.id}
                        />
                     <ItemCounter/>
                      </div>
                    )

                })
            
        

        }
        
        
    </div>

)
}
export default ItemList