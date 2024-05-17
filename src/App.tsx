
import './App.css'
import { ThemeProvider } from '@emotion/react'

import Login from './page/Login/Login'
import ContenedorLogin from './page/Login/components/ContenedorLogin'
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; 
import Rutas from './router/Rutas';
import { createTheme } from '@mui/material';
import { darkTheme } from './styles/darkTheme';
import { theme } from './styles/theme';


function App() {

  
 
  return (
          // <ThemeProvider theme={theme}>
            <Router >
              <Rutas />
            </Router>
          //  </ThemeProvider>
  )
}

export default App
