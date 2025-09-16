
import { Outlet } from 'react-router'
import CommonLayout from './components/Layout/PublicLayout/CommonLayout'


function App() {
  

  return (

      <CommonLayout>
       <Outlet/>
     </CommonLayout>
    
  )
}

export default App
