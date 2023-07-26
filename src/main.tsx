import React from 'react'
import ReactDOM from 'react-dom/client'
import "./styles/app.scss";
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './routes/routesConfig';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
