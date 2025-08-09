import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import { CultureProvider } from './context/CultureContext';
import './styles/theme.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <CultureProvider>
      <App />
    </CultureProvider>
  </HashRouter>
);
