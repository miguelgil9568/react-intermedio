import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CrChip from '../page/Login/components/CrChip';
import CrRating from '../page/Login/components/CrRating';
import { Box } from '@mui/material';

export default function CrCard() {

    fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>console.log(json))
  return (
    <Card sx={{ maxWidth: 345 , margin: '30px'}}>
        
        <CardMedia
            sx={{ height: 500 }}
            image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            title="green iguana"
        />
        <CardContent>
            <CrChip></CrChip>
            <Typography gutterBottom variant="h5" component="div">
            Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
            </Typography>
        </CardContent>
        <CardActions>
            <Box sx={{margin: '30px'}}>
                <CrRating  ></CrRating>
            </Box>
            <Button size='small' variant='contained'>
                Agregar
            </Button>
        </CardActions>
    </Card>
  );
}