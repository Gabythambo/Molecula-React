import { useEffect, useState } from 'react'
// import ItemDetail from './ItemDetail'

const ItemDetailContainer = ({children})=>{

    const url="https://run.mocky.io/v3/7c008792-4143-4754-a60f-13ff12e203f7"

    const [items,setItems]=useState([]);

    const getItems = async ()=>{

        const response = await fetch(url);
        const data = await response.json();
        console.log(response)
    
    }   
    useEffect(()=>{  
        getItems(setItems);
    
    },[])

return(
    <div className='wrapper'>
        {
                 items.map((product) =>{
                    return (
                        <div className="itemDetailContainer">
                            <div key={product.id}
                            name={product.name}
                            thumbnail={product.thumbnail}
                            price={product.price}
                            stock={product.stock}
                            id={product.id}
                            />
                        </div>     
                    )
                })
        }
    </div>
)
}
export default ItemDetailContainer;