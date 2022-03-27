
import ItemList from './ItemList'

const itemListContent = ({children}) =>{

    return(
        <div className="ContainerProducts">
        <div>{children}</div>
    
            <ItemList/> 
     
        </div>
        

    )
}

export default itemListContent;