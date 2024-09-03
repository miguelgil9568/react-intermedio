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
import { Link } from 'react-router-dom';

interface IProps {
    items : Product[];
}

export default function CrModalCarrito({items}:IProps) {

    let [isCheck,setValor] = useState(true);
    let [total,setTotal] = useState(0);
    //const dispatch = useAppDispatch();

    useEffect (()=>{
        calcularTotal();
      }, items
    )

    const handleCheck = () =>{
        console.log('handleCheck');
        if(!isCheck){
          setValor(!isCheck);
          //addProduct(item);
        }else {
          setValor(!isCheck);
          //removeProduct(item.id);
        }
      }


      const calcularTotal = ( ) =>{
        let precios : number[] = [];
        items.forEach(valor => {
          precios.push(valor.price);
        })
        setTotal( precios.reduce((accumulator, currentValue) =>{
          return accumulator + currentValue;
        }, 0) );   
      }

  return (
   <>
      {  items.length === 0 ? <h2 > Carrito vacio </h2> : items.map(item => (
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
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
                            <div>
                            { '$' +  item.price}
                            </div>
                          </Typography>
                      </React.Fragment>
                  }
                  
                  />
                  <CrBtnAccion isCheck={true} isShow={false} setValor={handleCheck}></CrBtnAccion>
              </ListItem>
              <Divider variant="inset" component="li" />
          </List>
          )
        )
       }
       <ul>
        <p style={{    display: 'flex', justifyContent: 'end', paddingInline: '30px'}}> Total : ${total} </p>
       </ul>
       <ul style={{display: 'flex', justifyContent: 'end'}}>
        <button type='button'>
            <Link to="/detalleCompra">Ir al carrito</Link>
          </button>
        </ul>
        

      </>
  );
}