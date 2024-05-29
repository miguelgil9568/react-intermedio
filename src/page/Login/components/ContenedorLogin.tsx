import { Box,  Card,  CardContent, CardMedia, Typography } from '@mui/material'
import FormLogin from './FormLogin'
import logo from '../../../assets/logo-2.png'

const ContenedorLogin = () => {
  return (
    
    <Box className='body content'>

      <Card>
          <CardMedia
            sx={{height: 400, justifyItems: 'center'}}
            image={logo}
            title="Contemplative Reptile"
          />
          <CardContent>
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