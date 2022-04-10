import * as React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';

export default function iconCart ()  {
        return(
            
           <Badge badgeContent={2} color="success"><ShoppingCartIcon color="primary"/></Badge>
           
        )
}
