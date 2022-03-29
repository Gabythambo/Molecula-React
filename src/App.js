import './App.css';
import NavBar from './Components/NavBar'
import CartWiget from './Components/cartWidget/carWidget'
import ItemListContainer from './Components/itemListContainer/itemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'

function App() {
  return (
  <>
    <div className='App-header'>
      <NavBar/>
    <CartWiget/> 
    </div>    
    <ItemListContainer>
      {/* h2 children de itemlistcontainer  */}
      <h2>Todos los Productos</h2> 
    </ItemListContainer>
    <ItemDetailContainer>
    <h2>Detalle Producto</h2> 
    </ItemDetailContainer>
    
  </>    
  );
}

export default App;

