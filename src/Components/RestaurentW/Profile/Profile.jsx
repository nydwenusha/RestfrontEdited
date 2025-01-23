import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';   
import UserProfile from './UserProfile';   
import ProfileNavigation from './ProfileNavigation'
import Orders from './Orders'

const Profile = () => {
     const[openSideBar,setOpenSideBar]=useState(false);
  return (
    <div className="lg:flex justify-between">
      <div className="sticky h-[80vh] lg:w-[20%]">
        <ProfileNavigation open={openSideBar} />
      </div>
      <div className="lg:w-[80%]">
        <Routes>
        
          <Route path='/' element={<UserProfile/> }/>
          <Route path='/orders' element={<Orders/> }/>
           
           
           
           
        </Routes>
      </div>
    </div>
  );
}

export default Profile

