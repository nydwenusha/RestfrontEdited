import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './NavbarPages/Home';
import Rooms from './NavbarPages/Rooms';
import About from './NavbarPages/About'; 
import Gallery from './NavbarPages/Gallery';
import LocalAttraction from './NavbarPages/LocalAttraction';
import Restaurent from './NavbarPages/Restaurent';
import VehicleRental from './NavbarPages/VehicleRental';
import Login from './Login/Login';

import RestaurantDetails from './Components/RestaurentW/Restaurant/RestaurantDetails.jsx';  // Adjust the path
import Cart from './Components/RestaurentW/Cart/Cart.jsx';  // Adjust the path
import Profile from './Components/RestaurentW/Profile/Profile.jsx';  // Adjust the path

export default function Main() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/Rooms' element={<Rooms/>}></Route>
            <Route path='/About' element={<About/>}></Route>
            <Route path='/LocalAttraction' element={<LocalAttraction/>}></Route>
            <Route path='/VehicleRental' element={<VehicleRental/>}></Route>
            <Route path='/Gallery' element={<Gallery/>}></Route>
            <Route path='/Restourents' element={<Restaurent/>}></Route>

            /* rest*/
             
            
            <Route path='restaurant/:city/:title/:id' element={<RestaurantDetails/>}></Route>
            <Route path='/Restourents/cart' element={<Cart/>}></Route>
            <Route path='/Restourents/my-profile/*' element={<Profile/>}></Route>

            /*  */

            <Route path='/Login' element={<Login/>}></Route>

          </Routes>
        </BrowserRouter>
    </div>
  )
}
