import { Box, ThemeProvider, createTheme } from '@mui/material'
import './App.css'
import { Provider } from './context/provider'
import { AsadoRouter } from './routes'

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: 'hsl(357, 96%, 26%)', // rojo en hexadecimal
      },
      secondary: {
        main: '#ff9e80', // azul en hexadecimal
      },
    },
  })

  return (
  
  <ThemeProvider theme={theme}>
    <Provider>
      <Box
         sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            minWidth: '100vw'
            }}
          >
      <AsadoRouter />
    </Box>
  </Provider>
</ThemeProvider>
      )
}

export default App
