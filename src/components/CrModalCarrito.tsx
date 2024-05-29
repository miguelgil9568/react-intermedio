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
import { useAppDispatch } from '../hooks/store';
import { addProduct, removeProduct } from '../store/redux/carrito/slice'
import { useState } from 'react';

interface IProps {
    items : Product[];
}

export default function CrModalCarrito({items}:IProps) {

    let [isCheck,setValor] = useState(true);
    const dispatch = useAppDispatch();

    const handleCheck = () =>{
        console.log('handleCheck');
        if(!isCheck){
          setValor(!isCheck);
          addProduct(item);
        }else {
          setValor(!isCheck);
          removeProduct(item.id);
        }
      }
    
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {/* <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" /> */}
      {items.map(item => (
        <>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                <Avatar alt="Travis Howard" src={item.image} />
                </ListItemAvatar>
                <ListItemText
                primary={item.title}
                secondary={
                    <React.Fragment>
                    <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                        
                    </Typography>
                        {item.category}
                    </React.Fragment>
                }
                />
                <CrBtnAccion isCheck={true} isShow={false} setValor={handleCheck}></CrBtnAccion>
            </ListItem>
            <Divider variant="inset" component="li" />
            </>
        ))}
    </List>
  );
}