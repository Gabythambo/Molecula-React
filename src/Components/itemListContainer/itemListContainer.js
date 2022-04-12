import ItemList from './ItemList'



const itemListContent = ({children}) =>{

    return(
        <div className="ContainerProducts">
        
        <h2>Todos los Productos</h2>
    
        <ItemList /> 
     
        </div>
        

    )
}

export default itemListContent;    