import { IconButton } from '@mui/material'
import React, { useState } from 'react'
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

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
                {isCheck ? <RemoveRedEyeIcon color='primary' /> : 
                <RemoveRedEyeIcon color='success' />}
            </IconButton>):
            (
            <IconButton onClick={setValor}>
                {isCheck ? <LibraryAddIcon color='primary' /> : 
                <LibraryAddCheckIcon color='success' />}
            </IconButton>
            )
             }
    </div>
  )
}

export default CrBtnAccion