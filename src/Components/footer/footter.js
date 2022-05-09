import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import '../../App.css'
const Footer = () => {
  return (
    <footer >
      <Container className='imagenfooter'>
        <Box sx={{ pt: 2, pb: 2, color: '#fff', height: 54 }}>
          <Typography align="center" sx={{ fontSize: 14 }}>
            &copy; Gabriel Thambourindeguy
          </Typography>
        </Box>
      </Container>
    </footer>
  )
}

export default Footer