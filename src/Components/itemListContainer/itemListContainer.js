import * as React from 'react';
import Card from '../Card/Card';

const itemListContainer = ({children}) =>{
  let data={
    img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1937&q=80src=./public/tarj3.jpg",
    title: "Cafe Brasil",
    description: "1/4kg • Especialidad",
    price: "45.00",
  }
    return(

      <div className="ContainerProducts">
        <div>{children}</div>
    <div className="wrapper">
    <Card dataproduct={data}/>
     
     
     
     {/* <Card
      img="https://images.unsplash.com/photo-1522992319-0365e5f11656?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      title="Cafe Brasil"
      description="1/4kg • Especialidad"
      price="29.95"
    />
    <Card
      img="https://images.unsplash.com/photo-1647363597339-ac437eda69a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      title="Cafe Brasil"
      description="1/4kg • Especialidad"
      price="24.99"
    />
    <Card
      img="https://images.unsplash.com/photo-1638367744867-9a7778ab9104?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1070&q=80"
      title="Cafe Brasil"
      description="1/4kg • Especialidad"
      price="19.95"
    /> */}
   </div>
   </div>  
              )
}

export default itemListContainer;