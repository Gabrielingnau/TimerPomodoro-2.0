import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyle } from './Styles/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './Styles/themes/default'
import { Routes } from './routes'
import { CyclesContextProvider } from './contexts/CyclesContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <CyclesContextProvider>
        <Routes />
      </CyclesContextProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
