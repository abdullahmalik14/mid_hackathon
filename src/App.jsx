import React from 'react'
import './App.css'
import Routers from './config/Routers'
import { ThemeProvider } from '@mui/material'
import theme from './utils/app_theme'
import { Provider } from 'react-redux'
import { store } from './store'

const App = () => {
  return (
    <>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
    <Routers/>
    </Provider>
    </ThemeProvider>
    </>
  )
}

export default App