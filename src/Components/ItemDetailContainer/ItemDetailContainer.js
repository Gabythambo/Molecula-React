import { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = ({})=>{

    const {id,name}=useParams()
    
    

    const url="https://run.mocky.io/v3/65a134eb-d0a3-4d61-bdb9-18c3464fb492"

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
                            onAdd={onAdd}
                            />
                
                    )
                })
        }
    
    </>
)
}
export default ItemDetailContainer;