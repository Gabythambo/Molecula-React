import { useEffect, useState } from 'react'
import Item from '../Card/Item'

import { CircularProgress } from '@mui/material'
import db from '../../fireBaseConfig'
    import { collection,getDocs} from 'firebase/firestore'

const ItemList = ({}) =>{
    const url="https://run.mocky.io/v3/5b1bff1b-b54a-451a-aa76-28a16dd552aa"

    const [items,setItems]=useState([]);
    const [loading,setLoading]=useState([true])   
    setTimeout(()=>{
                  
    },
    2000);
    
    const getItems = async ()=>{
            
        const itemsCollection = collection(db,'Productos')
        const productSnapShot= await getDocs(itemsCollection)
        
        const productList = productSnapShot.docs.map((doc)=>{
            // console.log(doc.data()) 
            // console.log(doc.id)
            const product = doc.data()
            product.id = doc.id
            setLoading(false) 
            console.log(product)
            
            

            
         


        })
        

        console.log(productList)
        // try{
        //     const response = await fetch(url);
        //     const data = await response.json();
           //     setLoading(false) 
        //     setItems(data)
            
        // }
        // catch (error){
        //     console.log(error)
        // }
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