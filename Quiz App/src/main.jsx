import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/App'
import Header from './Components/Header'
import Footer from './Components/Footer'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
  </React.StrictMode>
)
