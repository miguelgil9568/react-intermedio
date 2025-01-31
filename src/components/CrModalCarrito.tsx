import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Product } from '../types/Product';
import CrBtnAccion from './CrBtnAccion';
//import { addProduct, removeProduct } from '../store/redux/carrito/slice'
import { useEffect, useState } from 'react';
import { number } from 'yup';
import { Button } from '@mui/base';
import {  useHistory } from 'react-router-dom';
import { addProduct, removeProduct } from '../store/redux/carrito/slice'
import { useAppDispatch } from '../hooks/store';
import useServices from '../services/useServices'

interface IProps {
    items : Product[];
}

export default function CrModalCarrito({items}:IProps) {
    const history = useHistory();
    let [isCheck,setValor] = useState(true);
    let [total,setTotal] = useState(0);
    const dispatch = useAppDispatch();
    
    const {
      // data, 
      // error, 
      // handleFetch,
      handleFetchWithDiscount,
      // handleFetchxId, 
      state
      // loading
    } = useServices();

    useEffect (()=>{
        calcularTotal();
      }, [items]
    )

    const handleCheck = (item: Product) =>{
        dispatch(addProduct(item));
    }

    const handleRemove = (id: number ) =>{
      dispatch(removeProduct(id));
    };

    const calcularTotal = ( ) =>{
      let precios : number[] = [];
      items.forEach(valor => {
        precios.push(valor.price * valor.quantity!);
      })
      setTotal( precios.reduce((accumulator, currentValue) =>{
        return accumulator + currentValue;
      }, 0) );   
    }

    const irACarrito = () =>{
      return history.push('/detalleCompra');
    }

  return (
   <>
      {  items.length === 0 ? <h2 > Carrito vacio </h2> : items.map(item => (
            <List sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>
              <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                  <Avatar alt="Travis Howard" src={item.image} />
                  </ListItemAvatar>
                  <ListItemText
                  primary={item.title}
                  secondary={
                      <React.Fragment>
                          <Typography
                              sx={{  display: 'flex',
                              justifyContent: 'space-between' }}
                              component="span"
                              variant="body2"
                              color="text.primary"
                              
                          >
                            <div>
                              {item.category}
                            </div>
                          </Typography>
                            <div>
                            {item.quantity} 
                            { ' x  $' +  item.price}
                            </div>
                      </React.Fragment>
                  }
                  
                  />
                  <CrBtnAccion isCheck={true} isShow={false} setValor={() =>{
                    console.log('handleCheck');
                    setValor(!isCheck);
                    handleRemove(item.id);
                    }}></CrBtnAccion>
              </ListItem>
              <Divider variant="inset" component="li" />
          </List>
          )
        )
       }
       <ul>
        <p style={{    display: 'flex', justifyContent: 'end', paddingInline: '30px'}}> Total : ${total} </p>
       </ul>
       {items.length != 0 ? <div style={{display: 'flex', justifyContent: 'end'}}>
        <Button  color="primary" style={{width: '100%', marginInline: 20, backgroundColor: 'white'}} onClick={irACarrito}>
            Ir al carrito
          </Button>
        </div>: ''}
      </>
  );
}