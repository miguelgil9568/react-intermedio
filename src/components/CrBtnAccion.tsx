import { IconButton } from '@mui/material'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { useEffect } from 'react';

interface IProps{
    isCheck: boolean,
    setValor: () => void,
    isShow: boolean
} 

const CrBtnAccion = ({isCheck,setValor, isShow}:IProps) => {

  return (
    <div>
        {isShow ? (
             <IconButton onClick={setValor}>
                {isCheck ? <RemoveRedEyeIcon color='success' />:
                <RemoveRedEyeIcon color='primary' />  
                }
            </IconButton>):
            (
            <IconButton onClick={setValor}>
                {isCheck ? <RemoveShoppingCartIcon color='success' />:
                <ShoppingCartCheckoutIcon color='primary' />  
                }
            </IconButton>
            )
             }
    </div>
  )
}

export default CrBtnAccion