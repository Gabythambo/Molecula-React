import { useEffect, useState } from 'react'
import Item from '../Card/Item'

import { CircularProgress} from '@mui/material'
import db from '../../fireBaseConfig'
    import { collection,getDocs} from 'firebase/firestore'
// import { Category } from '@mui/icons-material'
// import { useParams } from 'react-router-dom'
import { Grid } from '@mui/material'
import { Typography } from '@mui/material'

const ItemList = ({childrem}) =>{

    const [items,setItems]=useState([]);
    const [loading,setLoading]=useState([true]) 
    
    const getItems = async ()=>{
        const itemsCollection = collection(db,'Productos')
        const productSnapShot= await getDocs(itemsCollection)
        
        const productList = productSnapShot.docs.map((doc)=>{
            const product = doc.data()
            product.id = doc.id
            return product 
             })
        return productList
    }   
    
    useEffect(()=>{  
     getItems().then((productos)=>{
                        setLoading(false)
                        setItems(productos)
                        
       }) 
    },[])

    return(
                
                <>
                 <Grid item xs={12} mr={0}>
                <Typography
                  align="right"
                  color="text.secondary"
                  gutterBottom
                  paragraph
                  
                >
                  {items.length} resultados
                </Typography>
              </Grid>
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
            </>
)}
export default ItemList
