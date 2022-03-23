import './App.css';
import NavBar from './Components/NavBar'
import CartWiget from './Components/cartWidget/carWidget'
import ItemListContainer from './Components/itemListContainer/itemListContainer';

function App() {
  return (
  <>
    <div className='App-header'>
      <NavBar/>
    <CartWiget/> 
    </div>    
    <ItemListContainer>
      {/* h2 children de itemlistcontainer  */}
      <h2>Products on line</h2> 

    </ItemListContainer>
  </>    
  );
}

export default App;

