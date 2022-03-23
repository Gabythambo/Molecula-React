import React,{useState} from 'react';

export default function ItemCounter({stock,countItem, onAdd}){
    
    const [count,setCount]=useState(countItem)
     
    console.log('contando desde:',count)
    
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
        <p>Sotck: {count}</p>
        <button className="card__btn" onClick={addProduct}>Add </button>
        <button className="card__btn" onClick={deductProduct}>reduct</button>
        <button className="card__btn" onClick={()=> onAdd(count)}>Agregar al Carrito</button>

      </>
    )
}