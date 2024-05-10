import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast} from 'react-toastify';
import {
  BrowserRouter ,
  Routes,
  Route,
} from "react-router-dom";
import Login from './Dulsha/components/Login'
import Register from './Dulsha/components/Register'
import Home from './Dulsha/components/Home'
import UserProfile from './Dulsha/components/Profile'
import CusHome from './Janidu/cushome';
import ShoppingCart from './Janidu/cart';
import Feedback from './Janidu/feedback';
import Shop from './Janidu/productlist';
import Detailsfeedback from './Janidu/feddbackdetails'
import Profile from './Dulsha/components/Profile'
import Sidebar from './Dulsha/components/Sidebar'
import AllEmployees from './Dulsha/components/AllEmployees';
import AddEmployee from './Dulsha/components/AddEmployee';
import UpdateEmployee from './Dulsha/components/UpdateEmployee';
import Admin from './Dulsha/components/Admin'
import AddOrder from './Dulsha/components/AddOrder';
import AllOrders from './Dulsha/components/AllOrders';
import UpdateOrder from './Dulsha/components/UpdateOrder';
import DeleteOrder from './Dulsha/components/DeleteOrder';
import Addshop from './Dulsha/components/addshop'
import AboutUs from './Janidu/about'
import Location from './Dulsha/components/Trackingpage'
import Shopp from "./Yasith/Pages/Shop";
import Product from "./Yasith/Pages/Product";
import Cart from "./Yasith/Pages/Cart";
import LoginSignup from "./Yasith/Pages/LoginSignup";
import Footer from "./Yasith/Components/Footer/Footer";
import ShopCategory from "./Yasith/Pages/ShopCategory";
import men_banner from './Yasith/Components/Assets/banner_mens.png';
import women_banner from './Yasith/Components/Assets/banner_women.png';
import kid_banner from './Yasith/Components/Assets/banner_kids.png';

import SupplierReg from './Dulsha/components/SupplierRegister';
import SupplierLog from './Dulsha/components/Supplierlogin';
import Item from './Chathura/Chathura';
import Dashboad from "./Chathura/supplierProfile/Dashboad";
import SupplierCreatePost from './Chathura/supplierProfile/SupplierCreatePost';
import Navbar from './Chathura/component/navbar';
import SupllierPostView from './Chathura/supplierProfile/SupllierPostView';
import SupplierProfile from './Chathura/supplierProfile/SupplierProfile';
import SupplierRegister from './Chathura/supplierProfile/SupplierRegister';
import SupplierProduct from './Chathura/supplierProfile/SupplierProduct';
import SupplierLogin from './Chathura/supplierProfile/SupplierLogin';
import Addlocation from './Dulsha/components/Addlocationdetails';
import ShopDetails from './Dulsha/components/shopview';
import Shopdetails from './Dulsha/components/Shopdetails';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
          <Routes>
          <Route path="/" element={<Login/>}/>
            <Route path="/Register" element={<Register/>}/>
            <Route path="/Admin" element={<Admin/>}/>
            <Route path="/sidebar" element={<Sidebar/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/viewemployee" element={<AllEmployees/>}/>
            <Route path="/updateemployee/:id" element={<UpdateEmployee/>}/>
            <Route path="/addemployee" element={<AddEmployee/>}/>
            <Route path="/cushome" element={<CusHome/>}/>
            <Route path="/cart" element={<ShoppingCart/>}/>
            <Route path="/shop" element={<Shop/>}/>
            <Route path="/feedback" element={<Feedback/>}/>
            <Route path='/fdetails' element={<Detailsfeedback/>}/>
            <Route path="/allOrders" element={<AllOrders/>}/>
            <Route path="/addOrder" element={<AddOrder/>}/>
            <Route path="/updateOrder/:id" element={<UpdateOrder/>}/>
            <Route path="/deleteOrder/:id" element={<DeleteOrder/>}/>
            <Route path="/location" element={<Location/>}/>
            <Route path="/addshop" element={<Addshop/>}/>
            <Route path="/addlocation" element={<Addlocation/>}/>
            <Route path="/Profile" element={<UserProfile/>}/>
            <Route path="/suppliereg" element={<SupplierReg/>}/>
            <Route path="/supplielog" element={<SupplierLog/>}/>
            <Route path="/shopp" element={<Shopp/>} />
            <Route path="/mens" element={<ShopCategory banner={men_banner} category="men"/>}/>
            <Route path="/womens" element={<ShopCategory banner={women_banner} category="women"/>}/>
            <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kid"/>}/>
            <Route path="/product" element={<Product/>}/>
            <Route path="/productId" element={<Product/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/loginy" element={<LoginSignup/>}/>
            <Route path="/Itemadd" element={<Item/>}/>
            <Route path = "/SupplierLogin" element = { <SupplierLogin/>} />   
            <Route path = "/Dashboad" element = { <Dashboad/>} />
            <Route path = "/SupplierRegister" element = { <SupplierRegister/>} />
            <Route path = "/SupplierProfile" element = { <SupplierProfile/>} />  
            <Route path = "/SupplierCreatePost" element = { <SupplierCreatePost/>} />
            <Route path = "/SupllierPostView" element = { <SupllierPostView/>} />
            <Route path = "/SupplierProduct" element = { <SupplierProduct/>} />
            <Route path = "/about" element = { <AboutUs/>} />
            <Route path = "/dd" element = { <Shopdetails/>} />
            <Route exact path="/blog/:id" element={<ShopDetails />} />


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
