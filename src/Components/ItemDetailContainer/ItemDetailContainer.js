import { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = ({})=>{

    const {id}=useParams()
    
    

    const url="https://run.mocky.io/v3/9924e14d-0573-4155-a686-44b9fa4be7dd"

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
                            />
                
                    )
                })
        }
    
    </>
)
}
export default ItemDetailContainer;