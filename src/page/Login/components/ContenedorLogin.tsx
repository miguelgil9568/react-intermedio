import { Box,  Card,  CardContent, CardMedia, Typography } from '@mui/material'
import FormLogin from './FormLogin'
import logo from '../../../assets/logo-2.png'

const ContenedorLogin = () => {
  return (
    
    <Box className='body content'>

      <Card>
          <CardMedia
            sx={{height: 250, justifyItems: 'center'}}
            image={logo}
            title="Contemplative Reptile"
          />
          <CardContent sx={{    width: '400px',
                display: 'flex',
                gap: '10px',
                flexDirection: 'column'}}>
            <Typography gutterBottom variant="h5" component="h2">
              Inicio de sesion
            </Typography>
            <FormLogin></FormLogin>

            
          </CardContent>
        {/* <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions> */}
      </Card>
    </Box>
  )
}

export default ContenedorLogin