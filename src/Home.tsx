import  { useEffect, useState } from 'react'
import CrCard from './components/CrCard'
import {  Box } from '@mui/material'
import useServices from './services/useServices'
import { Product } from './types/Product'
import { addProduct, removeProduct } from './store/redux/carrito/slice'
import { useAppSelector, useAppDispatch } from './hooks/store'
import CrSpinner from './components/CrSpinner'
import { useQuery } from '@tanstack/react-query'
import { ApolloClient, HttpLink, InMemoryCache, gql, useLazyQuery } from '@apollo/client'


const GET_PRODUCTS = gql `
  query GetProducts {
    products {
      id
      title
      price
      description
      category
      image
      quantity
    }
  }
`;

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://localhost:5000/graphql',
  }),
}); 

client.query({
  query: GET_PRODUCTS
})  .then(result => console.log('graphql' + result));



const Home = () => { 


  // const query = useQuery({
  //      queryKey: ['keyproductos'],
  //      queryFn: () => fetch('https://fakestoreapi.com/products').then(res => res.json())
  // });

  const carrito = useAppSelector((state) => state);
  console.log('carrito '+ carrito);

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

  useEffect(()=>{
    const  metodoasync = async () => {
      await handleFetchWithDiscount();
    }
    metodoasync();
    //handleFetchxId(1);
  },[]);

  useEffect(()=>{
    console.log(' cambio en el carrito' ); 
    const  metodoasync = async () => {
      await handleFetchWithDiscount();
     
    }
    metodoasync();
    //handleFetchxId(1);
  },[carrito.carrito]);

  const handleAdd = (item: Product ) =>{
    dispatch(addProduct(item));
  }

  const handleRemove = (id: number ) =>{
    dispatch(removeProduct(id));
    state.data.forEach((element: Product) => {
      if (element.id === id){
        element.quantity = 0;
      }
    });
  }

  const validarCheck = (item: Product) : boolean => {
    return state.data.filter(element => {
      return item.id === element.id && element.quantity == 0;
    }).length > 0 ?  true : false ;
  }

  return (
    <>
      <Box sx={{
        display: 'flex',
        marginTop: 4,
        gap: 0,
        flexWrap: 'wrap',
        paddingInline: '7%',
        justifyContent: 'center'
      }}>
        {!state.loading && state.data !== null  ? state.data.map((item: Product) => (
          <CrCard item={item} add={handleAdd} remove={handleRemove} ischeck={validarCheck(item)} />
        )): <CrSpinner ></CrSpinner>}
      </Box>
    </> 
  )
  
} 

export default Home