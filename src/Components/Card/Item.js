import "./card.css"
import  Button from '@mui/material/Button';
import ItemCounter from "../ItemCounter/itemCounter"

 const Item = ({name,thumdnail,price,stock})=>{    
    
    function onAdd(cantidad){
        console.log(`agregaste ${cantidad} ${name}`)
      }   

  return(
        <div className="card">
        <img className="card__img" alt="Imagen producto" src={thumdnail} />
        <div className="card__body">
            <h2 className="card__title">{name}</h2>
            <Button className="card__detail" >Detalle del producto  </Button>
            <h3 className="card__stock">stock disponible : {stock}</h3>
           
        </div>
        <ItemCounter stock={stock} countItem={1} onAdd={onAdd}/>
        </div>
        )
}

export default Item;

