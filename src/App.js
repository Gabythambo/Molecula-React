// modulos //
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Styles //
import './App.css'; 
// Componentes //
import NavBar from './Components/NavBar'
import ItemListContainer from './Components/itemListContainer/itemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';




function App() {
  return (
    <>
       <BrowserRouter>
      <NavBar />

      <ItemListContainer>
      </ItemListContainer>
      
      <ItemDetailContainer> 
      </ItemDetailContainer>
      </BrowserRouter> 
{/*
    
    <Routes>  
        <Route path='/' element={Home} />
    </Routes>
     
      <ItemDetailPage/>
*/}



    </>
  );
}

export default App;

