import './App.css';
import NavBar from './Components/NavBar'


import ItemDetailPage from './Components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import ItemListContainer from './Components/itemListContainer/itemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <>
      {/* <BrowserRouter>

    
    <Routes>  
        <Route path='/' element={Home} />
    </Routes>
     
      <ItemDetailPage/>

  </BrowserRouter> */}

      <NavBar />

      <ItemListContainer>
        <h2>Todos los Productos</h2>
      </ItemListContainer>
      <ItemDetailContainer></ItemDetailContainer>




    </>
  );
}

export default App;

