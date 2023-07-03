import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Routing from './Routing'
import AuthProvider from '../auth/AuthProvider'


ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <Routing />
  </AuthProvider>
)
