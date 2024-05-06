import React from 'react'
import ReactDOM from 'react-dom/client'
import { CarritoApp } from './CarritoApp'
import { BrowserRouter } from 'react-router-dom'

import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <CarritoApp />   
    </React.StrictMode>
  </BrowserRouter>
)
