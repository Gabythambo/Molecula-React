// modulos //
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Styles //
import './App.css'; 
// Componentes //
import NavBar from './Components/navBarComponent/navBar'
import CartContext  from "./Components/Context/CartContext";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home"
import ItemDetailPage from "./Pages/ItemDetailPage";
import RegionsPage from "./Pages/RegionsPage";
import NotFound from "./Pages/Error404";
import Footer from "./Components/footer/footter";


function App() {
  return (
    <>
      <CartContext>

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="*" element={<NotFound/>} />
          <Route path="/" element={<Home/>}/>
          <Route path="/region/:region" element={<RegionsPage/>}/>
          <Route path="/producto/:id" element={<ItemDetailPage/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
      <Footer></Footer> 
      </CartContext>
   




    </>
  );
}

export default App;

