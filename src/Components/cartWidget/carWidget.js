import * as React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom';
export default function iconCart ()  {
        return(
            
           <Badge badgeContent={2} color="success"> <Link to ='/cart'> <ShoppingCartIcon color="primary"/> </Link> </Badge>
           
        )
}
