import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import i18n configuration
import './i18n.js'

console.log('🚀 KelceTS Business School - Landing Page Loaded Successfully');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
