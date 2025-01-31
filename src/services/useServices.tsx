import  {  useReducer } from 'react'
import AxiosClient from './clients/AxiosClient'
import { Product } from '../types/Product'

interface IState {
    data: Product[],
    loading: boolean,
    error: null
}

export const initialState: IState = {
    data: [],
    loading: false,
    error: null
}

type IAction =  |
{type: 'DATA', payload: Product[]} |
{type: 'ERROR', payload: any} |
{type: 'LOADING', payload: boolean }



const reducer = (state : IState, action : IAction): IState => {
    switch(action.type){
        case 'LOADING': 
         return {
            ...state,
            loading: action.payload
         }
         case 'DATA': 
         return {
            ...state,
            data: action.payload
         }
         case 'ERROR': 
         return {
            ...state,
            error: action.payload
         }
    }
}

const useServices = () => {
    const [state, dispatch] = useReducer(reducer, initialState );

    const handleFetch = async () => {
        dispatch({type: 'LOADING', payload: true});
        try {
            const response = await AxiosClient("products");
            console.log(response);
            dispatch({type: 'DATA', payload: response.data});
            dispatch({type: 'LOADING', payload: false });
        }catch(err){
            dispatch({type: 'ERROR', payload: err});
            //seterror(error);
        }finally{
            dispatch({type: 'LOADING', payload: false });
            //setloading(false)
        }
    }
    const addDiscount = (products: Product[]): Product[] => {
        return products.map(product => ({
            ...product,
            //price: product.price * 0.1 ,
            discount:  Math.floor(Math.random() * 100)// Assuming a 10% discount
        }));
    };

    const handleFetchWithDiscount = async () => {
        dispatch({type: 'LOADING', payload: true});
        try {
            const response = await AxiosClient("products");
            console.log(response);
            response.data.forEach((element: Product) => {
                element.quantity = 1;
            });
            const productsWithDiscount = addDiscount(response.data);
            dispatch({type: 'DATA', payload: productsWithDiscount});
            dispatch({type: 'LOADING', payload: false });
        }catch(err){
            dispatch({type: 'ERROR', payload: err});
        }finally{
            dispatch({type: 'LOADING', payload: false });
        }
    };

    const handleFetchxId = async ({id}: any) => {
        dispatch({type: 'LOADING', payload: true});
        try {
            const response = await AxiosClient("products/"+ id);    
            console.log(response);
            dispatch({type: 'DATA', payload: response.data});
        }catch(err){
            dispatch({type: 'ERROR', payload: err});
            //seterror(error);
        }finally{
            dispatch({type: 'LOADING', payload: false });
            //setloading(false)
        }
    }

    // const[error, seterror] = useState(null)
    // const[data, setdata] = useState([])
    // const[loading, setloading] = useState(true)

    

    return {
        //data,
        //error,
        handleFetch,
        handleFetchxId,
        handleFetchWithDiscount, 
        //loading,
        state
    }
}

export default useServices