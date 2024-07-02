
import './App.css'
import {
  BrowserRouter as Router
} from "react-router-dom"; 
import Rutas from './router/Rutas';
import { Provider} from 'react-redux';
import { store } from './store/redux';
import CrNavBar from './components/CrNavBar';



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
