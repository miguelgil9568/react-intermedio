
import { createTheme } from '@mui/material'
import './App.css'
import { ThemeProvider } from '@emotion/react'
import Login from './page/Login/Login'
import ContenedorLogin from './page/Login/components/ContenedorLogin'

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
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <ThemeProvider theme={theme} >
        <div></div>
      </ThemeProvider>

      <ContenedorLogin/>
      <br/>
    </>
  )
}

export default App
