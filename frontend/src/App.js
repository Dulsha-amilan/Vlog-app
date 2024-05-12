import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast} from 'react-toastify';
import {
  BrowserRouter ,
  Routes,
  Route,
} from "react-router-dom";
import Login from './D/components/Login'
import Register from './D/components/Register'
import Home from './D/components/Home'
import UserProfile from './D/components/Profile'
import CusHome from './Pages/cushome';

import Feedback from './Pages/feedback';

import Detailsfeedback from './Pages/feddbackdetails'
import Profile from './D/components/Profile'
import Sidebar from './D/components/Sidebar'



import Admin from './D/components/Admin'




import Addshop from './D/components/addblog'
import AboutUs from './Pages/about'





import ShopDetails from './D/components/blogview';
import Shopdetails from './D/components/Shopblog';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
          <Routes>
          <Route path="/" element={<Login/>}/>
            <Route path="/Register" element={<Register/>}/>
            <Route path="/Admin" element={<Admin/>}/>
            <Route path="/sidebar" element={<Sidebar/>}/>
          
          
          
          
            <Route path="/cushome" element={<CusHome/>}/>
           
           
            <Route path="/feedback" element={<Feedback/>}/>
            <Route path='/fdetails' element={<Detailsfeedback/>}/>
          
           
           
            
     
            <Route path="/addshop" element={<Addshop/>}/>
            
            <Route path="/Profile" element={<UserProfile/>}/>

            
            <Route path = "/about" element = { <AboutUs/>} />
            <Route path = "/dd" element = { <Shopdetails/>} />
            <Route exact path="/component/:id" element={<ShopDetails />} />


        </Routes>
        <ToastContainer
        position="top-left"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      </BrowserRouter>
    </div>
  );
}

export default App;
