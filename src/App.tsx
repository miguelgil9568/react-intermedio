
import './App.css'
import { ThemeProvider } from '@emotion/react'
import Login from './page/Login/Login'
import ContenedorLogin from './page/Login/components/ContenedorLogin'
import Home from './Home';
import { Link, Route, Switch } from 'react-router-dom';

function App() {

  // const theme = createTheme({
  //   palette:{
  //     main: '#ff4400'
  //   },
  //   secondary: {
  //     main: '#f50057'
  //   }
  // })
  
  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      {/* <main>
          <Switch>
            <Route path="/" Component={ContenedorLogin} />
            <Route path="/home" Component={Home} />
          </Switch>
       </main> */}
       
      <Home></Home>
      {/* <ContenedorLogin ></ContenedorLogin> */}
      <br/>
    </>
  )
}

export default App
