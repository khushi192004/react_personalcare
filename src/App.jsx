import Header from './common/Header'
import Footer from './common/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Product from './pages/Product'
import Productdetails from './pages/Productdetails'
import Contact from './pages/Contact'
import ProductInquiry from './pages/ProductInquiry'
import './App.css'
import {BrowserRouter, Route, Routes, Link} from "react-router-dom"
import { ToastContainer } from 'react-toastify'
import CategoryProduct from './pages/CategoryProduct'
import Testimonials from './pages/Testimonials'

function App() {
    
  return (
    <>
    <ToastContainer/>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/categories/:id' element={<CategoryProduct/>}/>
        <Route path='/product' element={<Product/>} />
        <Route path='/productdetails/:id' element={<Productdetails/>}/>
        <Route path='/testimonial' element={<Testimonials/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/ProductInquiry/:id' element={<ProductInquiry/>}/>
        
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </>
  )
}

export default App
