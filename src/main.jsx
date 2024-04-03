import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './mine.css'
import UstateOne from './components/UstateOne.jsx'
import UstateTwo from './components/UstateTwo.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <UstateOne></UstateOne>
    <UstateTwo></UstateTwo>
  </React.StrictMode>,
)
