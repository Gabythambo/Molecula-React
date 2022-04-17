  import React,{useState} from 'react';
  import Button from '@mui/material/Button';

  export default function ItemCounter({stock,countItem, onAdd}){
      
      const [count,setCount]=useState(countItem)
      
      const addProduct= ()=>{
          if (count < stock)
        {setCount(count + 1)}
      }
    
      const deductProduct=()=>{
          if (count > 1){
          setCount(count - 1)
          }
      }


      return(
          <>
          <div className='flex'>
              <Button className="" onClick={deductProduct}>-</Button>
              <p>Qty: {count}</p>
              <Button className="" onClick={addProduct}>+ </Button>
          </div>
          <button className="add-to-cart btn btn-default" onClick={()=> {onAdd(count)}}>Agregar al Carrito</button>

        </>
      )
  }