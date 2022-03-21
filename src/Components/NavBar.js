import * as React from 'react';
import Button from '@mui/material/Button';



export default function NavBar()  {
    
        return(
        <>
           <header className='App-header'>
            <div>
            MI LOGO
            </div>
           
            <ul>
                <li><Button variant="contained">Shop</Button></li>
                <li><Button variant="contained" >Quiz</Button></li>
                <li><Button variant="contained">Subcripcion</Button></li>
                
            </ul>
        
            </header>
        
        </>
        )
}
