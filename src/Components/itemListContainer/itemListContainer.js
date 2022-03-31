
import ItemList from './ItemList'

const itemListContent = ({children}) =>{

    return(
        <div className="ContainerProducts">
        <div>{children}</div>
    
            <ItemList /*key={'product.id'}*//> 
     
        </div>
        

    )
}

export default itemListContent;   