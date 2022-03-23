import ItemCounter from '../ItemCounter/itemCounter'
import './card.css'


export default function Card({dataproduct}){
  const {img, title,description,price} = dataproduct
  
function onAdd (cantidad){
  console.log (`asdasd ${cantidad} afssda`);
}

  return(
        <div className="card">
        <img src={img} className="card__img" alt="Imagen producto" />
        <div className="card__body">
          <h2 className="card__title">{title}</h2>
          <p className="card__description">{description}</p>
          <h3 className="card__price">{price}</h3>
         <ItemCounter stock="5" countItem={1} onAdd={onAdd}/>
         </div>
      </div>
          
          
                )

}