

import {
    Switch,
    Route
  } from "react-router-dom"; 
import ContenedorLogin from '../page/Login/components/ContenedorLogin';
import DetalleProducto from '../components/DetalleProducto';
import Home from '../Home';

const Rutas = () => {
  return (
    <Switch>
        <Route exact path="/">
            <Home/>
        </Route>
        <Route path="/login">
            <ContenedorLogin />
        </Route>
        <Route path="/detalle">
            <DetalleProducto />
        </Route>
        <Route path="*">
            <h1>404</h1>
        </Route>
  </Switch>
  )
}

export default Rutas