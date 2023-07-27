import { Outlet } from 'react-router-dom'
import '../../styles/app.scss' 
import TopPane from './topPane'

function App() {
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
