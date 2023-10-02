import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './styles/reset.css';
import './styles/html-body.css';
import './styles/bootstrap.min.css';
import './styles/sweetalert2.all.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
