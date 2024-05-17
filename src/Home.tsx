import React, { useEffect, useState } from 'react'
import CrNavBar from './components/CrNavBar'
import CrCard from './components/CrCard'
import { Alert, Box } from '@mui/material'
import useServices from './services/useServices'
import CrSpinner from './components/CrSpinner'
import { Product } from './types/Product'



const Home = () => { 
  
  const {
    // data, 
    // error, 
    handleFetch,
    handleFetchxId, 
    state
    // loading
  } = useServices();

  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(()=>{
    setLoading(true);
    handleFetch();
    setData(state.data);
    setLoading(state.loading);
    //handleFetchxId(1);
  },[])

  console.log(state.data);
  console.log(state.loading);


  // if(loading){
  //   // return ( 
  //   //         // <CrSpinner isViewer={loading} ></CrSpinner>
  //   // )
  // }else {
    return (
      <>
        <CrNavBar/>
        
        {/* <Alert severity="success">This is a success Alert.</Alert> */}
        <Box sx={{
          display: 'flex',
          marginTop: 4,
          gap: 0,
          flexWrap: 'wrap',
          paddingInline: '7%',
          justifyContent: 'center'
        }}>
          {state.data.map((item: any) => (
            <CrCard item={item}/>
          ))}
        </Box>
        
      </>
    )
  // }
  
} 

export default Home