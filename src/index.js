import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ExperiencesContextProvider } from './context/ExperiencesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ExperiencesContextProvider>
      <App />
    </ExperiencesContextProvider> 
  </React.StrictMode>
);


