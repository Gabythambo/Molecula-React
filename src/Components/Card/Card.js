import * as React from 'react';
import './card.css'

export default function Card({img, title,description,price }){
  

    return(
        
        <div className="card">
        <img src={img} className="card__img" alt="Imagen producto" />
        <div className="card__body">
          <h2 className="card__title">{title}</h2>
          <p className="card__description">{description}</p>
          <h3 className="card__price">{price}</h3>
          <button className="card__btn">Add to Cart</button>
        </div>
      </div>
          
          
                )

}