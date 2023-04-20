import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './main.css'
import { BrowserRouter } from 'react-router-dom'
import{ThemeProvider} from '@mui/material'
import theme from './theme'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
  <BrowserRouter>
  <ThemeProvider theme={theme('light')}>
    <App />
  </ThemeProvider>
  </BrowserRouter>
  </React.StrictMode>,
)
