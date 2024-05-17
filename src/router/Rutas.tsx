
import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"; 
import ContenedorLogin from '../page/Login/components/ContenedorLogin';
import DetalleProducto from '../components/DetalleProducto';
import Home from '../Home';

const Rutas = () => {
  return (
    <Switch>
        <Route path="/">
            <Home/>
        </Route>
        <Route path="/login">
            <ContenedorLogin />
        </Route>
        <Route path="/detalle">
            <DetalleProducto />
        </Route>
  </Switch>
  )
}

export default Rutas