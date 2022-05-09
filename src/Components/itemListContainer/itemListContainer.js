import ItemList from './ItemList'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { CardMedia } from '@mui/material'



const itemListContent = ({children}) =>{

    return(
       
    <Box className="ContainerProductsSIN">
          
      <Container maxWidth="lg">
        <Box sx={{ pt: 6 }}>
          <Typography
            variant="h2"
            align="center"
            color="text.primary"
            paragraph
          >
        Todos los Productos
          </Typography>
        </Box>
      </Container>
      
      <Container maxWidth="lg">
        <Box sx={{ pt: 2, pb: 6 }}>
        <ItemList /> 
        </Box> 
      </Container>
    </Box>
        

    )
}

export default itemListContent;    