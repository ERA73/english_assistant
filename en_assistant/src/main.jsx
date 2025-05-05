import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
if (window.location.hostname.startsWith('www.')) {
  const newHost = window.location.hostname.replace('www.', '');
  const newUrl = `${window.location.protocol}//${newHost}${window.location.pathname}${window.location.search}`;
  window.location.replace(newUrl);
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
