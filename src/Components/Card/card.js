import ItemCounter from "../ItemCounter/itemCounter"
import "./card.css"



export default function Card({dataproduct}){
    const {thumdnail,name,description,price,stock} = dataproduct

    function onAdd(cantidad){
      console.log(`agregaste ${cantidad} ${name}`)
    }   
   
    return(
        <div className="card">
        <img src={thumdnail} className="card__img" alt="Imagen producto" />
        <div className="card__body">
          <h2 className="card__title">{name}</h2>
          <p className="card__description">{description}</p>
          <h3 className="card__price">{price}</h3>
         </div>
          <ItemCounter stock={stock} countItem={1} onAdd={onAdd}/>
      </div>
    )
}

