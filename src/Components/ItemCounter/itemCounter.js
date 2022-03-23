import React,{useState} from 'react';

export default function ItemCounter(Stock){
    
    const [countItem,setCountItem]=useState(1)
     
    console.log('Empieza contando desde:',countItem)
    
    const addProduct= ()=>{
        if (countItem < 5)
      {setCountItem(countItem + 1)}
    }
  
    const deductProduct=()=>{
        if (countItem > 0){
        setCountItem(countItem - 1)
        }
    }
    return(
        <><p>Sotck: {countItem}</p>
        <button className="card__btn" onClick={addProduct}>Add </button>
        <button className="card__btn" onClick={deductProduct}>reduct</button>
        
      </>
    )
}