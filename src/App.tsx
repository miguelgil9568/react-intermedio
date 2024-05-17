
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


function App() {

  
  const theme = createTheme({
    palette:{
      main: '#ff4400'
    },
    secondary: {
      main: '#f50057'
    }
  })
  
  return (
          <ThemeProvider theme={theme}>
            <Router >
              <Rutas />
            </Router>
          </ThemeProvider>
  )
}

export default App
