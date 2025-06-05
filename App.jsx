import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Placeorder from'./Pages/Placeorder'
import Footer from './Components/Navbar/Footer'
import LoginPopup from './Components/Navbar/LoginPopup'
function App() {


  const[showlogin,setShowlogin] = useState(false)
  
  

  return (
    <>
       {showlogin?<LoginPopup/>:<></>}
      <div className='app'>
        <Navbar setShowlogin={setShowlogin}/>
        <Routes>
         < Route path='/' element={<Home/>} />
         <Route path='/cart' element={<Cart/>}/>
         <Route path='/order' element={<Placeorder/>}/>
        </Routes>
        </div>
        <Footer/>
        
    </>
  )
}

export default App
