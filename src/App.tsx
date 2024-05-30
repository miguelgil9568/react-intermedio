
import './App.css'
import {
  BrowserRouter as Router
} from "react-router-dom"; 
import Rutas from './router/Rutas';
import { Provider} from 'react-redux';
import { store } from './store/redux';



function App() {

  
 
  return (
          // <ThemeProvider theme={theme}>
            <Router >
              <Provider store={store}>
                <Rutas />
              </Provider>
            </Router>
          //  </ThemeProvider>
  )
}

export default App
