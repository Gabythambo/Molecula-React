import "./card.css"
import  Button from '@mui/material/Button';

 const Item = ({name,thumbnail,price,stock})=>{    
    
  return(
        <div className="card">
        <img className="card__img" alt="Imagen producto" src={thumbnail} />
        <div className="card__body">
            <h2 className="card__title">{name}</h2>
            <Button className="card__detail" >Detalle del producto  </Button>
            <h3 className="card__stock">stock disponible : {stock}</h3>
        </div>
          
        </div>
        )
}

export default Item;

