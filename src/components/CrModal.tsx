import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import useMediaQuery from '@mui/material/useMediaQuery';
import { styled, useTheme } from '@mui/material/styles';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { Link } from 'react-router-dom';
import {
  Unstable_NumberInput as BaseNumberInput,
  NumberInputProps,
} from '@mui/base/Unstable_NumberInput';
import { StyledInputRoot } from '@mui/joy/Input/Input';
import { blue, grey } from '@mui/material/colors';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { Product } from '../types/Product';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/store';
import { addProduct, updateProduct } from '../store/redux/carrito/slice';

interface IProps {
    item: Product,
    open: boolean, 
    setValor : () => void,
    handleClose : () => void,
    handleClickOpen : () => void,
    isCheck:boolean
}

export default function CrModal( {item, open,setValor,  handleClickOpen, handleClose, isCheck}:IProps) {

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));


  const carrito = useAppSelector((state) => state);
  console.log('carrito '+ carrito);

  const dispatch = useAppDispatch();

  let [quantity,setQuantity] = useState<number>(1);
  

  const NumberInput = React.forwardRef(function CustomNumberInput(
    props: NumberInputProps,
    ref: React.ForwardedRef<HTMLDivElement>,
  ) {
    return (
      <BaseNumberInput
        slots={{
          root: StyledInputRoot,
          input: StyledInput,
          incrementButton: StyledButton,
          decrementButton: StyledButton,
        }}
        slotProps={{
          incrementButton: {
            children: <AddIcon fontSize="small" />,
            className: 'increment',
          },
          decrementButton: {
            children: <RemoveIcon fontSize="small" />,
          },
        }}
        {...props}
        ref={ref}
      />
    );
  });

  const StyledInputRoot = styled('div')(
    ({ theme }) => `
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 400;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[500]};
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
  `,
  );
  
  const StyledInput = styled('input')(
    ({ theme }) => `
    font-size: 0.875rem;
    font-family: inherit;
    font-weight: 400;
    line-height: 1.375;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 4px ${
      theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.5)' : 'rgba(0,0,0, 0.05)'
    };
    border-radius: 8px;
    margin: 0 8px;
    padding: 10px 12px;
    outline: 0;
    min-width: 0;
    width: 4rem;
    text-align: center;
  
    &:hover {
      border-color: ${blue[400]};
    }
  
    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[700] : blue[200]};
    }
  
    &:focus-visible {
      outline: 0;
    }
  `,
  );
  
  const StyledButton = styled('button')(
    ({ theme }) => `
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    box-sizing: border-box;
    line-height: 1.5;
    border: 1px solid;
    border-radius: 999px;
    border-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
    color: ${theme.palette.mode === 'dark' ? grey[200] : grey[900]};
    width: 32px;
    height: 32px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 120ms;
  
    &:hover {
      cursor: pointer;
      background: ${theme.palette.mode === 'dark' ? blue[700] : blue[500]};
      border-color: ${theme.palette.mode === 'dark' ? blue[500] : blue[400]};
      color: ${grey[50]};
    }
  
    &:focus-visible {
      outline: 0;
    }
  
    &.increment {
      order: 1;
    }
  `,
  );

  const setValores= () => {
    console.log("item "+JSON.stringify(item) );
    console.log("quantity "+ quantity );
    dispatch(addProduct(item));
    isCheck ? setQuantity(1) : setQuantity(quantity);
    setValor();
  }

  return (
    <React.Fragment>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >

        <Card sx={{ width: 500}}>
            <div>
                <Typography level="title-lg">{item.title}</Typography>
                <Typography level="body-sm">{item.description}</Typography>
                <div style={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }} >
                    {/* <CrBtnAccion isShow={false} setValor={setValor} isCheck={isCheck}></CrBtnAccion> */}
                </div>
            </div>
            <div style={{ justifyContent: 'center' , display: 'flex'}}>
              
                <img
                src={item.image}
                srcSet={item.image}
                loading="lazy"
                alt=""
                style={{ maxWidth: '250px',maxHeight: '500px'}}
                />
            </div>

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
                {!isCheck ? <NumberInput min={1} defaultValue={1} value={quantity} onChange={(event, val) => setQuantity(val)} /> : ''}
                <div>
                  <Typography level="body-xs">Precio por unidad:</Typography>
                  <Typography fontSize="lg" fontWeight="lg">
                      ${item.price}
                  </Typography>
                </div>
                <Button
                onClick={setValores}
                size="medium"
                variant="contained"
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