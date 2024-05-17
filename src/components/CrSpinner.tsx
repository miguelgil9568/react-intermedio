import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

interface IProps{
    isViewer: boolean
}

export default function CrSpinner({isViewer = false}: IProps) {
  return <>
            {isViewer ? (<Box sx={{ display: 'flex' }}>
            <CircularProgress />
            </Box>) : ''
            }
        </>
}