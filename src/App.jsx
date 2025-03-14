import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { HashRouter } from 'react-router-dom'
import UserLogin from './Components/UserLogin'
import AdminLogin from './Components/AdminLogin'
import Landing from './Components/Landing'
import AdminSignup from './Components/AdminSignup'
import AdminHomePage from './Components/AdminHomePage'
import UserSignup from './Components/UserSignup'
import UserHomePage from './Components/UserHomePage'
import Error from './Components/Error'
import AdminAccountInfo from './Components/AdminAccountInfo'
import AdminUpdateAccount from './Components/AdminUpdateAccount'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className='app'>
        <HashRouter>
          <Routes>
            <Route path='/*' element={<Error/>}></Route>
            <Route path='/' element={<Landing/>}> </Route>
            <Route path='/adminlogin' element={<AdminLogin/>}> </Route>
            <Route path='/userlogin' element={<UserLogin/>}> </Route>
            <Route path='/adminsignup' element={<AdminSignup/>}></Route> 
            <Route path='/usersignup' element={<UserSignup/>}></Route>
            <Route path='/adminhomepage' element={<AdminHomePage/>}></Route> 
            <Route path='/userhomepage' element={<UserHomePage/>}></Route>
            <Route path='/updateAdmin' element={<AdminUpdateAccount />}></Route>
            <Route path='adminhomepage/*' element={<AdminHomePage/>}> </Route>
            <Route path='userhomepage/*' element={<UserHomePage/>}></Route>
          </Routes>
        </HashRouter>
        <ToastContainer/>
    </div>
  )
}

export default App
