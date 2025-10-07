import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import Authcontext from './context/Authcontext.jsx';
import AdminContext from './context/AdminContext.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Authcontext>
        <AdminContext>
          <App />
        </AdminContext>
      </Authcontext>
  </StrictMode>
);
