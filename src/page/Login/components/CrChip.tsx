import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { useEffect } from 'react';



export default function CrChip({valor}: any) {
  useEffect(() =>{
      
    }
  , [])

  return (
    <Stack spacing={1} >
      <Stack direction="row" spacing={1}>
        { valor > 80 ? ( <Chip label={valor + '% Off'}  color="success"   />):  
        valor < 80 &&  valor > 30  ? <Chip label={valor + '% Off'}  color="warning"   /> : 
        <Chip label={valor + '% Off'}  color="error"   /> }
      </Stack>
    </Stack>
  );
}
