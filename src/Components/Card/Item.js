import "./card.css"
import  Button from '@mui/material/Button';
import {Link} from 'react-router-dom';


 const Item = ({id,name,thumbnail,price,stock,description,category,region})=>{    

  return(
        <div className="card">
        <img className="imgCard" alt="Imagen producto" src={thumbnail} />
        <div className="card__body">
            <h2 className="card__title">{name}</h2>
            <button className="btn" ><Link to={`/producto/${id}`}>Product detail</Link>  </button>
            <h3 className="card__stock">Price :$ {price}</h3>
            <h3 className="card__stock">stock : {stock}</h3>
        </div>
        </div>
        )
}
export default Item;

