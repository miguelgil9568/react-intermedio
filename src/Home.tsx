import React, { useEffect } from 'react'
import CrNavBar from './components/CrNavBar'
import CrCard from './components/CrCard'
import { Box } from '@mui/material'
import useServices from './services/useServices'

const Home = () => { 
  
  const {
    // data, 
    // error, 
    handleFetch,
    handleFetchxId, 
    state
    // loading
  } = useServices();

  useEffect(()=>{
    handleFetch();
    //handleFetchxId(1);
  },[])

  console.log(state.data);

  if(state.LOADING){

  }

  return (
    <>
      <CrNavBar/>
      <Box sx={{
        display: 'flex',
        marginTop: 4,
        gap: 0,
        flexWrap: 'wrap',
        paddingInline: '4rem',
        justifyContent: 'center'
      }}>
        {state.data.map((item: any) => (
          <CrCard item={item}/>
        ))}
      </Box>
      
    </>
  )
}

export default Home