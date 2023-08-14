import { Location, Outlet, useLocation, useNavigate } from 'react-router-dom'
import '../../styles/app.scss' 
import TopPane from './topPane'
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight, faChevronRight, faChevronLeft, faEnvelope, faDownload } from '@fortawesome/free-solid-svg-icons';
import { fab, faLinkedin, faGithub, faSkype } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(faArrowRight, faChevronRight, faChevronLeft, faEnvelope, faLinkedin, faGithub, faSkype, fab, far, faDownload);

function App() {
  const location: Location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;


  useEffect(() => {
    if(pathname === "/")
      navigate("/home");
  });

  return (
    <>
      <TopPane/>
      <div>
        <Outlet />
      </div>
      <ToastContainer/>
    </>
  )
}

export default App
