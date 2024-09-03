
import './App.css'
import {
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom"; 
import Rutas from './router/Rutas';
import { Provider} from 'react-redux';
import { store } from './store/redux';
import CrNavBar from './components/CrNavBar';
import ContenedorLogin from './page/Login/components/ContenedorLogin';



function App() {

  
 
  return (
          // <ThemeProvider theme={theme}>
            <>      
              <Router >
                <Provider store={store}>
                  <CrNavBar/>
                  <Rutas />
                </Provider>
              </Router>  
            </>
          //  </ThemeProvider>
  )
}

export default App
