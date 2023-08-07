import React from 'react'
import ReactDOM from 'react-dom/client'
import "./styles/app.scss";
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './routes/routesConfig';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
library.add(faArrowRight, faChevronRight, faChevronLeft);



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
