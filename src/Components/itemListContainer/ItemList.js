import { useContext, useEffect, useState } from 'react'
import Item from '../Card/Item'
import { data } from '../Data/data.js'
import { CircularProgress } from '@mui/material'




const ItemList = () =>{

const [products,setProducts]=useState([])
const [loading,setLoading]=useState([true])



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
    setLoading(false)
    } catch (err){
    console.log(err)
}
}

useEffect(()=>{
    getProductsData()
    
},); // si uso array vacio me da error



return(
    <div className='wrapper'>
        {
             loading ? <CircularProgress /> :
                products.map((product) =>{
                    return (
                        
                        <Item
                        key={product.id}
                          name={product.name}
                          thumbnail={product.thumbnail}
                          price={product.price}
                          stock={product.stock}
                          id={product.id}
                        />
                    
                    )

                })
             
        

        }
        
        
    </div>

)
}
export default ItemList