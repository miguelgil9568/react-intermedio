import React, { useReducer, useState } from 'react'
import AxiosClient from './clients/AxiosClient'

interface IState {
    data: any,
    loading: boolean,
    error: null
}

export const initialState: IState = {
    data: [],
    loading: false,
    error: null
}


const reducer = (state : IState, action : any) => {
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
    const [state, dispatch] = useReducer(reducer, initialState )

    const handleFetch = async () => {
        dispatch({type: 'LOADING', payload: true});

        const response = await AxiosClient("products");
        try {
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

    const handleFetchxId = async ({id}: any) => {
        dispatch({type: 'LOADING', payload: true});

        const response = await AxiosClient("products/"+ id);
        try {
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
        //loading,
        state
    }
}

export default useServices