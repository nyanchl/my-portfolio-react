import React from 'react'
import ReactDOM from 'react-dom/client'
import Myapps from './Myapps.tsx'
import Header from './components/header/header.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <h1>Nyanchl's Portfolio</h1>
    <Myapps />
  </React.StrictMode>
)
