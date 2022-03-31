import * as React from 'react';
import Button from '@mui/material/Button';
import CartWidget from './cartWidget/carWidget'



export default function NavBar()  {
    
        return(
        <>
           <header className='App-header'>
            <div>
            <h2>Molecula</h2>
            </div>
           
            <ul>
                <li><Button variant="contained">Shop</Button></li>
                <li><Button variant="contained" >Quiz</Button></li>
                <li><Button variant="contained">Subcripcion</Button></li>
                
            </ul>
            <CartWidget/>
            </header>
        
        </>
        )
}
