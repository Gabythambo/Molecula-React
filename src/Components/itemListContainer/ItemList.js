import { useEffect, useState } from 'react'
// import Item from '../Card/Item'

import { CircularProgress, filledInputClasses } from '@mui/material'
import db from '../../fireBaseConfig'
    import { collection,getDocs} from 'firebase/firestore'
import { Category } from '@mui/icons-material'
import { useParams } from 'react-router-dom'

const ItemList = ({childrem}) =>{
    // const url="https://run.mocky.io/v3/5b1bff1b-b54a-451a-aa76-28a16dd552aa"

    const [items,setItems]=useState([]);
    const [loading,setLoading]=useState([true]) 
    const {region} =useParams() 
   
    // setTimeout(()=>{
                  
    // },
    // 2000);
    
    const getItems = async ()=>{
            
        const itemsCollection = collection(db,'Productos')
        const productSnapShot= await getDocs(itemsCollection)
        
        const productList = productSnapShot.docs.map((doc)=>{
            // console.log(doc.data()) 
            // console.log(doc.id)
            const product = doc.data()
            product.id = doc.id
            
                return product
            
             }
             )
        return productList

        
        
    }   
    
    useEffect(()=>{  
     setLoading(false) 
     
      
       getItems().then((productos)=>{
                        setLoading(false)
                        setItems(productos)
                        console.log(productos)
                        // console.log(items)



       } ) 
        
   
    },[])

    // const filterProductByCategory = (array,region)=>{
    //     return array.map((product, i )=>{
    //         if(product.region === "Central America"){
               
    //             return setItems(items =>[...items,product])
                
                
    //         }
    //     })
    // }

    
return(
    
    <div className='wrapper'>
        {/* {
            
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
        
         */}
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