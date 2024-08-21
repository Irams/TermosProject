import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import { TermosProvider } from './context/TermosProvider';
import router from './router';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TermosProvider>
      <RouterProvider router={router}/>
    </TermosProvider>
  </React.StrictMode>,
)
