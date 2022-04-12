import { useEffect, useState } from 'react'
import Item from '../Card/Item'

import { CircularProgress } from '@mui/material'
import { useParams } from 'react-router-dom'

const ItemList = ({}) =>{
    

    

    const url="https://run.mocky.io/v3/65a134eb-d0a3-4d61-bdb9-18c3464fb492"

    const [items,setItems]=useState([]);
    const [loading,setLoading]=useState([true])   
    setTimeout(()=>{
                  


  
    },
    2000);


    const getItems = async ()=>{
                

        try{
            const response = await fetch(url);
            const data = await response.json();
            setLoading(false)    
            setItems(data)
            
        }
        catch (error){
            console.log(error)
        }
    }   
    useEffect(()=>{  
        getItems(setItems); 
        
    },[])


return(
    <div className='wrapper'>
        {
             loading ? <CircularProgress /> :
                items.map((product) =>{
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







// import { useEffect, useState } from 'react'
// import Item from '../Card/Item'
// import { data } from '../Data/data.js'
// import { CircularProgress } from '@mui/material'




// const ItemList = () =>{

// const [products,setProducts]=useState([])
// const [loading,setLoading]=useState([true])



//     const getProducts= new Promise ((resolve,reject) =>{
//         setTimeout(()=>{
//             resolve(data);
//         },
//         2000);
//     })
      
//     const getProductsData = async ()=>{
// try{
//     const resultado = await getProducts;
//     setProducts(resultado)
//     setLoading(false)
//     } catch (err){
//     console.log(err)
// }
// }

// useEffect(()=>{
//     getProductsData()
    
// },); // si uso array vacio me da error



// return(
//     <div className='wrapper'>
//         {
//              loading ? <CircularProgress /> :
//                 products.map((product) =>{
//                     return (
                        
//                         <Item
//                         key={product.id}
//                           name={product.name}
//                           thumbnail={product.thumbnail}
//                           price={product.price}
//                           stock={product.stock}
//                           id={product.id}
//                         />
                    
//                     )

//                 })
             
        

//         }
        
        
//     </div>

// )
// }
// export default ItemList