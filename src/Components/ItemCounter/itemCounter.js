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
        <p>Cantidad: {count}</p>
        <Button className="card__btn" onClick={addProduct}>+ </Button>
        <Button className="card__btn" onClick={deductProduct}>-</Button>
        <Button className="card__btn" onClick={()=> {onAdd(count)}}>Agregar al Carrito</Button>

      </>
    )
}