import { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import db from '../../fireBaseConfig';
import { doc,getDoc } from 'firebase/firestore';
const ItemDetailContainer = ({})=>{

    const {id}=useParams()
    const navigate=useNavigate()
    const url="https://run.mocky.io/v3/5b1bff1b-b54a-451a-aa76-28a16dd552aa"

    const [items,setItems]=useState([]);
       
    const getItems = async ()=>{

        const docRef = doc(db,'Productos',id)
        const docSnap = await getDoc(docRef)

      
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            let product = docSnap.data()
            product.id = docSnap.id
            setItems(product)

          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
            navigate("/error")
          }

    }   
    useEffect(()=>{  
        getItems(setItems); 
    },[])   
return(
    <>    
            
                {/* //  items.map((items) =>{ */}
                {/* //         if (items.id == id) */}
                        
                    (
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
                
                    
                
        
    
    </>
)
}
export default ItemDetailContainer;