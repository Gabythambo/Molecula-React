import "./card.css"
import  Button from '@mui/material/Button';
import ItemCounter from "../ItemCounter/itemCounter"
// import ItemDetail from "../ItemDetailContainer/ItemDetail";

 const Item = ({name,thumbnail,price,stock,id})=>{    
    
    function onAdd(cantidad){
        console.log(`agregaste ${cantidad} ${name}`)
      }   

  return(
        <div className="card">
        <img className="card__img" alt="Imagen producto" src={thumbnail} />
        <div className="card__body">
            <h2 className="card__title">{name}</h2>
            <Button /*onClick={ItemDetail(id)}*/ className="card__detail" >Detalle del producto  </Button>
            <h3 className="card__stock">stock disponible : {stock}</h3>
            <h3 className="card__stock">Precio : {price}</h3>
        </div>
        <ItemCounter stock={stock} countItem={1} onAdd={onAdd}/>
        </div>
        )
}

export default Item;

