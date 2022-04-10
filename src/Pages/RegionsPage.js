import { useEffect, useState } from 'react'
import Item from '../Components/Card/Item'
import { useParams } from 'react-router-dom';




const RegionPageContainer = ()=>{

    const {region}=useParams()

    const url="https://run.mocky.io/v3/65a134eb-d0a3-4d61-bdb9-18c3464fb492"

    const [items,setItems]=useState([]);

       

    const getItems = async ()=>{

        try{
            const response = await fetch(url);
            const data = await response.json();
            // console.log(data)
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
  <div className='wrapper'>
             {
                 items.map((items) =>{
                        if (items.region === region)
                        
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
                    else{return (null)}
                })
        }
    </div>
    </>
)
}
export default RegionPageContainer;