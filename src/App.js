// modulos //
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Styles //
import './App.css'; 
// Componentes //
import NavBar from './Components/NavBar'
import ItemListContainer from './Components/itemListContainer/itemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';

import Home from "./Pages/Home"
import ItemDetailPage from "./Pages/ItemDetailPage";



function App() {
  return (
    <>
    
       <BrowserRouter>
      <NavBar />
    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/producto/:id" element={<ItemDetailPage/>}/>
      </Routes>

      
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

