import { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = ({})=>{

    const {id}=useParams()

    const url="https://run.mocky.io/v3/5b1bff1b-b54a-451a-aa76-28a16dd552aa"

    const [items,setItems]=useState([]);
       
    const getItems = async ()=>{

        try{
            const response = await fetch(url);
            const data = await response.json();
            
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
    <>    
        {      
                 items.map((items) =>{
                        if (items.id == id)
                        
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
export default ItemDetailContainer;