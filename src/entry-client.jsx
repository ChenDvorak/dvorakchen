import ReactDOM from 'react-dom'
import { hydrateRoot } from 'react-dom/client';
import App from './App'
import { BrowserRouter } from "react-router-dom";

hydrateRoot(
  document.getElementById('app'), 
  <BrowserRouter>
    <App />
  </BrowserRouter>
);