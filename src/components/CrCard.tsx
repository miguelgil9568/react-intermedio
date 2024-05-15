import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CrChip from '../page/Login/components/CrChip';
import CrRating from '../page/Login/components/CrRating';
import { Box, Stack } from '@mui/material';
import { IconButton } from '@mui/material';
import { LibraryAdd } from '@mui/icons-material';
import CrBtnAccion from './CrBtnAccion';
import { useState } from 'react';
import CrModal from './CrModal';

interface IProps {
    item: any
}

export default function CrCard({item}: IProps) {
    let [isCheck,setValor] = useState(false);
    
    const [open, setOpen] = React.useState(false);


    const handleCheck = () =>{
      console.log('handleCheck');
      setValor(!isCheck);
    }

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

      console.log('item CrCard'+item);

  return (
    <>
    <Card sx={{ maxWidth: 345 , margin: '30px'}}>
        <Stack spacing={2} m={2}>
        <CrChip></CrChip>
        </Stack>
        <CardMedia
            sx={{ height: 500 }}
            component={"img"}
            image={item.image}
            title="green iguana"
            style={{
                width : '200',
                height: '200',
                objectFit: 'contain'
            }}
            alt='green iguana'
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {item.description}
            </Typography>
        </CardContent>
            <Box sx={{margin: '30px'}}>
                <CrRating  ></CrRating>
            </Box>
        <CardActions 
        sx={{
            display: 'flex',
            justifyContent: 'space-between'
        }}>
            <CrBtnAccion isCheck={open} setValor={handleClickOpen} isShow={true}/>
            <CrBtnAccion isCheck={isCheck} setValor={handleCheck} isShow={false}/>
        </CardActions>
    </Card>

    <CrModal open={open} handleClickOpen={handleClickOpen} handleClose={handleClose} ></CrModal>
    </>
  );
}