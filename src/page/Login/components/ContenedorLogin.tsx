import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import FormLogin from './FormLogin'

const ContenedorLogin = () => {
  return (
    

    <Card>
      <CardActionArea>
        <CardMedia
        
          image=".."
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Inicio de sesion
          </Typography>
          <FormLogin></FormLogin>

          
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
    </Card>
  )
}

export default ContenedorLogin