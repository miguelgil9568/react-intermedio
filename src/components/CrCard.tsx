import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CrChip from '../page/Login/components/CrChip';
import CrRating from '../page/Login/components/CrRating';
import { Box, Stack } from '@mui/material';
import CrBtnAccion from './CrBtnAccion';
import { useState } from 'react';
import CrModal from './CrModal';
import { Product } from '../types/Product';

interface IProps {
    item: Product,
    add: (item: Product) => void,
    remove: (id: number) => void,
    ischeck:  boolean
}

export default function CrCard({item, add, remove,ischeck }: IProps) {
    let [isCheck,setValor] = useState(ischeck);
    const [open, setOpen] = useState(false);


    const handleCheck = () =>{
      console.log('handleCheck');
      if(!isCheck){
        setValor(!isCheck);
        add(item);
      }else {
        setValor(!isCheck);
        remove(item.id);
      }
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
    <Card sx={{ maxWidth: 350 , width: 300 , margin: '15px', justifyContent: 'center'}} > 
        <Stack spacing={2} m={2}>
        <CrChip valor={item.discount}></CrChip>
        </Stack>
        <CardMedia onClick={handleClickOpen} 
            sx={{ height: 200  }}
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
        <CardContent onClick={handleClickOpen} >
            <Typography gutterBottom variant="h5" component="div" sx={{height: '100px' }} className='module line-clamp'>
                {item.title}
            </Typography>
        </CardContent>
        <CardActions 
        sx={{
            display: 'flex',
            justifyContent: 'space-between'
        }}>
            <Box sx={{margin: '10px'}}>
                <CrRating  isCarita={false} valor={item.rating.rate}></CrRating>
            </Box>
            {/* <CrBtnAccion isCheck={open} setValor={handleClickOpen} isShow={true}/> */}
            <CrBtnAccion isCheck={isCheck} setValor={handleCheck} isShow={false}/>
        </CardActions>
    </Card>

    <CrModal item={item} open={open} handleClickOpen={handleClickOpen} handleClose={handleClose} isCheck={isCheck} setValor={handleCheck} ></CrModal>
    </>
  );
}