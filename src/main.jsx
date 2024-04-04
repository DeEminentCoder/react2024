import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import './mine.css'
import App from './App.jsx'
import UstateOne from './components/UstateOne.jsx'
import UstateTwo from './components/UstateTwo.jsx'
import SchPortal from './components/SchPortal.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <UstateOne></UstateOne> */}
    {/* <UstateTwo></UstateTwo> */}
    <SchPortal></SchPortal>
  </React.StrictMode>,
)
