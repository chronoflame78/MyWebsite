import { Location, Outlet, useLocation, useNavigate } from 'react-router-dom'
import '../../styles/app.scss' 
import TopPane from './topPane'
import { useEffect } from 'react';

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
    </>
  )
}

export default App
