import * as React from 'react';
import  Button  from '@mui/material/Button';
import CartWidget from './cartWidget/carWidget'
import { Link } from 'react-router-dom';
import "./NavBar/NavBar.css"
import MenuListComposition from './MenuListComposition/MenuListComposition';




export default function NavBar()  {
    
        return(
        <>
        

          
           <header className='App-header'>
            <div>
            <h2><Link to={'/'}>Molecula</Link></h2>
            </div>
           
            <ul>
                <li><Button><Link to={'/'}>Home</Link></Button></li>
                <li><Button><MenuListComposition>Regiones</MenuListComposition></Button></li>
                <li><Button><Link to={''}>Quiz</Link></Button></li>
                <li><Button><Link to={'/contact'} >Contacto</Link></Button></li>
                
            </ul>
            <CartWidget/>
            </header>
        
        </>
        )
}
