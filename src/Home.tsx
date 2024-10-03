import  { useEffect, useState } from 'react'
import CrNavBar from './components/CrNavBar'
import CrCard from './components/CrCard'
import {  Box } from '@mui/material'
import useServices from './services/useServices'
import { Product } from './types/Product'
import { addProduct, removeProduct } from './store/redux/carrito/slice'
import { useAppSelector, useAppDispatch } from './hooks/store'
import CrSpinner from './components/CrSpinner'
import { useQuery } from '@tanstack/react-query'
import { ApolloClient, HttpLink, InMemoryCache, gql, useLazyQuery } from '@apollo/client'
import { useSnackbar } from 'notistack'
import CrFilter from './components/CrFilter'


const GET_PRODUCTS = gql `
  query GetProducts {
    products {
      id
      title
      price
      description
      category
      image
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
}).then(result => console.log('graphql' + result));



const Home = () => { 

  const query = useQuery({
       queryKey: ['keyproductos'],
       queryFn: () => fetch('https://fakestoreapi.com/products').then(res => res.json())
  });

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
  const [loading, setLoading] = useState<boolean>(false);

  const { enqueueSnackbar } = useSnackbar();


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

  console.log('evento agragado= ' + state.data);
  console.log('loading '+state.loading); 


  if(loading){
    return ( 
            <CrSpinner isViewer={loading} ></CrSpinner>
    )
  }
  
    return (
      <>
        
        {/* <Alert severity="success">This is a success Alert.</Alert> */}

        {/* <CrFilter></CrFilter> */}
        <Box sx={{
          display: 'flex',
          marginTop: 4,
          gap: 0,
          flexWrap: 'wrap',
          paddingInline: '7%',
          justifyContent: 'center'
        }}>
          {state !== null && state !== undefined ? state.data.map((item: any) => (
            <CrCard item={item} add={handleAdd} remove={handleRemove} ischeck={ carrito.carrito.filter(element => {
              return item.id === element.id;
            }).length > 0 ?  true : false} />
          )): <CrSpinner isViewer={loading} ></CrSpinner>}
        </Box>
        
      </>
    )
  // }
  
} 

export default Home