import { useEffect, useState } from 'react'
// import ItemDetail from './ItemDetail'
import Item from '../Card/Item';

const ItemDetailContainer = ({children})=>{

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
    <h2>Listado por api </h2>

    <div className='wrapper' >
           
        {
                 items.map((items) =>{
                    return (
                        
                            <Item key={items.id}
                            name={items.name}
                            thumbnail={items.thumbnail}
                            price={items.price}
                            stock={items.stock}
                            id={items.id}
                            />
                
                    )
                })
        }
    </div>
    </>
)
}
export default ItemDetailContainer;