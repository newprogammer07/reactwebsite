import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import About from './About'
import AdminHome from './Admin/AdminHome'
import Cart from './Cart'
import Cheakout from './Cheakout'
import Contact from './Contact'
import Footer from './Footer'
import Home from './Home' 
import Navbar from './Navbar'
import Shop from './Shop'
import AdminMainCategory from './Admin/AdminMainCategory'
import Login from './Login'
import Signup from './Signup'
import AdminAddMaincategory from './Admin/AdminAddMainCatagory'
import AdminUpdateMaincategory from './Admin/AdminUpdateMaincategory'
import AdminSubcategory from './Admin/AdminSubCategory'
import AdminAddSubcategory from './Admin/AdminAddSubCatagory'
import AdminUpdateSubcategory from './Admin/AdminUpdateSubcategory'
import AdminBrand from './Admin/AdminBrand'
import AdminAddBrand from './Admin/AdminAddBrand'
import AdminUpdateBrand from './Admin/AdminUpdateBrand'
import AdminProduct from './Admin/AdminProduct'
import AdminAddProduct from './Admin/AdminAddProduct'
import AdminUpdateProduct from './Admin/AdminUpdateProduct'
import Profile from './Profile'
import Updateprofile from './UpdateProfile'
import SingleProductPage from './SingleProductPage'
import Confirmation from './Confirmation'
import AdminUsers from './Admin/AdminUsers.jsx'
import AdminContactUs from './Admin/AdminContactUs'
import AdminSingleCheckout from './Admin/AdminSingleCheckout'
import AdminCheckout from './Admin/AdminChekout'
 
export default function App() {
  return (
    <>
    <BrowserRouter>
     <Navbar />
    <Routes>
        <Route path='' element={<Home />} />
        <Route path='/about' element = {<About />} />
        <Route path='/shop/:mc' element = {<Shop />} />
        <Route path='/contact' element = {<Contact />} />
        <Route path='/cart' element = {<Cart />} />
        <Route path='/cheakout' element = {<Cheakout />} />
        <Route path='/single-product/:id' element = {<SingleProductPage/>} />
        <Route path='/admin-home' element = {<AdminHome />} />
        <Route path='/confirmation' element = {<Confirmation/>} />

        <Route path='/admin-add-maincategory' element = {<AdminAddMaincategory />} />
        <Route path='/admin-update-maincategory/:id' element = {<AdminUpdateMaincategory />} />
        <Route path='/admin-maincategory' element = {<AdminMainCategory />} />

        <Route path='/admin-add-subcategory' element = {<AdminAddSubcategory />} />
        <Route path='/admin-update-subcategory/:id' element = {<AdminUpdateSubcategory />} />
        <Route path='/admin-subcategory' element = {<AdminSubcategory />} />

        <Route path='/admin-add-brand' element = {<AdminAddBrand />} />
        <Route path='/admin-update-brand/:id' element = {<AdminUpdateBrand />} />
        <Route path='/admin-brand' element = {<AdminBrand />} />

        
        <Route path='/admin-add-product' element = {<AdminAddProduct />} />
        <Route path='/admin-update-product/:id' element = {<AdminUpdateProduct />} />
        <Route path='/admin-product' element = {<AdminProduct />} />

        <Route path='/login' element = {<Login />} />
        <Route path='/signup' element = {<Signup />}/> 
        <Route path='/profile' element = {<Profile/>} />
        <Route path='/update_profile' element = {<Updateprofile/>} />
        <Route path='/admin-user' element = {<AdminUsers/>} />
        <Route path='/admin-contact' element = {<AdminContactUs/>} />
        <Route path='/admin-sigle-contact/:id' element = {<AdminContactUs/>} />
        <Route path='/admin-checkout' element={<AdminCheckout/>} />
        <Route path='/admin-single-checkout/:id' element={<AdminSingleCheckout/>} />
         
        
    </Routes>
    </BrowserRouter> 
 {/* <br /> */}
     <Footer />
     
    </>
  )
}
