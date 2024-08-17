import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import About from './Components/About';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';

const root = ReactDOM.createRoot(document.getElementById('root'));

  


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
