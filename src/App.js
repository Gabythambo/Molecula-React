import './App.css';
import NavBar from './Components/NavBar'
import CartWiget from './Components/cartWidget/carWidget'
import itemListContainer from './Components/itemListContainer/itemListContainer';

function App() {
  return (
  <>
    <div className='App-header'>
      <NavBar/>
    <CartWiget/> 
    </div>    
    <itemListContainer/>
  </>    
  );
}

export default App;

