import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import AspectRatio from '@mui/joy/AspectRatio';
import CrBtnAccion from './CrBtnAccion';

interface IProps {
    item: any,
    open: boolean, 
    setValor : () => void,
    handleClose : () => void,
    handleClickOpen : () => void,
    isCheck:boolean
}

export default function CrModal( {item, open,setValor,  handleClickOpen, handleClose, isCheck}:IProps) {

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));



  return (
    <React.Fragment>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >

        <Card sx={{ width: 500 }}>
            <div>
                <Typography level="title-lg">{item.title}</Typography>
                <Typography level="body-sm">{item.description}</Typography>
                <div style={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }} >
                    <CrBtnAccion isShow={false} setValor={setValor} isCheck={isCheck}></CrBtnAccion>
                </div>
            </div>
            <AspectRatio minHeight="500px"  maxHeight="1000px">
                <img
                src={item.image}
                srcSet={item.image}
                loading="lazy"
                alt=""
                />
            </AspectRatio>

            {/* <ImageList sx={{ width: 500, height: 450 }} variant="woven" cols={3} gap={8}>
                
                <ImageListItem key={item.image}>
                <img
                    srcSet={`${item.image}?w=161&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=161&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                />
                </ImageListItem>
             </ImageList> */}
            <CardContent orientation="horizontal">
                <div>
                <Typography level="body-xs">Precio Total:</Typography>
                <Typography fontSize="lg" fontWeight="lg">
                    ${item.price}
                </Typography>
                </div>
                <Button
                onClick={setValor}
                size="md"
                color="primary"
                aria-label="Explore Bahamas Islands"
                sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
                >
                  { !isCheck ? 'Agregar al carrito' : 'Desagregar del carrito'}
                </Button>
            </CardContent>
        </Card>
        
      </Dialog>
    </React.Fragment>
  );
}