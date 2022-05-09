import { useEffect, useState } from 'react'
import Item from '../Components/Card/Item'
import {useParams, } from 'react-router-dom';
import { collection,getDocs } from 'firebase/firestore';
import db from '../fireBaseConfig';

const RegionPageContainer = ({children})=>{

    const {region}=useParams()
    const [items,setItems]=useState([]);

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
        setItems(productos)
                           
          }) 
       },[])

    
    return(
            <>
            <div className='wrapper'>
            {
                items.map((items) =>{
                    if (items.region ===region)
                    return (
                            <Item key={items.id}
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
            </div>
            </>       
    )
}

    export default RegionPageContainer