import  { useEffect, useState } from 'react'
import CrNavBar from './components/CrNavBar'
import CrCard from './components/CrCard'
import {  Box } from '@mui/material'
import useServices from './services/useServices'
import { Product } from './types/Product'
import { addProduct, removeProduct } from './store/redux/carrito/slice'
import { useAppSelector, useAppDispatch } from './hooks/store'

const Home = () => { 

  const carrito = useAppSelector((state) => state);
  console.log('carrito '+ carrito);

  const dispatch = useAppDispatch();

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

  const handleAdd = (item: Product ) =>{
    dispatch(addProduct(item));
  }

  const handleRemove = (id: number ) =>{
    dispatch(removeProduct(id));
  }

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
          {data.map((item: any) => (
            <CrCard item={item} add={handleAdd} remove={handleRemove} ischeck={ carrito.carrito.filter(element => {
              return item.id === element.id;
            }).length > 0 ?  true : false} />
          ))}
        </Box>
        
      </>
    )
  // }
  
} 

export default Home