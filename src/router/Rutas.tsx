

import {
    Switch,
    Route
  } from "react-router-dom"; 
import ContenedorLogin from '../page/Login/components/ContenedorLogin';
import DetalleProducto from '../components/DetalleProducto';
import Home from '../Home';
import CrDatosCompra from "../components/CrDatosCompra";

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
                <Route path="/detalleCompra">
                    <CrDatosCompra />
                </Route>
                <Route path="*">
                    <h1>Ruta no encontrada - 404</h1>
                </Route>
        </Switch>
  )
}

export default Rutas