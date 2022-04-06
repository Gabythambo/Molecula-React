// modulos //
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Styles //
import './App.css'; 
// Componentes //
import NavBar from './Components/NavBar'
import ContactPage from "./Pages/ContactPage";
import Home from "./Pages/Home"
import ItemDetailPage from "./Pages/ItemDetailPage";
import RegionsPage from "./Pages/RegionsPage";

function App() {
  return (
    <>
    
       <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/region/:region" element={<RegionsPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/producto/:id" element={<ItemDetailPage/>}/>
        </Routes>
      </BrowserRouter> 
   




    </>
  );
}

export default App;

