import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleClick = (path) => {
    setActiveLink(path);
    navigate(path);
  };

  return (
    <div className='navbar'>
      <div className='newnav'>
        <div className='navtext'>
          <Link 
            to='/' 
            className={activeLink === '/' ? 'active' : ''}
            onClick={() => handleClick('/')}
          >
            Home
          </Link>
          <Link 
            to='/Rooms' 
            className={activeLink === '/Rooms' ? 'active' : ''}
            onClick={() => handleClick('/Rooms')}
          >
            Rooms
          </Link>
          <Link 
            to='/About' 
            className={activeLink === '/About' ? 'active' : ''}
            onClick={() => handleClick('/About')}
          >
            About
          </Link>
          <Link 
            to='/LocalAttraction' 
            className={activeLink === '/LocalAttraction' ? 'active' : ''}
            onClick={() => handleClick('/LocalAttraction')}
          >
            Local Attraction
          </Link>
          <Link 
            to='/VehicleRental' 
            className={activeLink === '/VehicleRental' ? 'active' : ''}
            onClick={() => handleClick('/VehicleRental')}
          >
            Vehicle Rental
          </Link>
          <Link 
            to='/Gallery' 
            className={activeLink === '/Gallery' ? 'active' : ''}
            onClick={() => handleClick('/Gallery')}
          >
            Gallery
          </Link>
          <Link 
            to='/Restourents' 
            className={activeLink === '/Restourents' ? 'active' : ''}
            onClick={() => handleClick('/Restourents')}
          >
            Restaurant
          </Link>
          {/* Animation line */}
          <div className={`animationline ${activeLink === '/' ? 'start-Home' : 
                                     activeLink === '/Rooms' ? 'start-Rooms' : 
                                     activeLink === '/About' ? 'start-About' : 
                                     activeLink === '/LocalAttraction' ? 'start-LocalAttraction' :
                                     activeLink === '/VehicleRental' ? 'start-VehicleRental' :
                                     activeLink === '/Gallery' ? 'start-Gallery' :
                                     activeLink === '/Restourents' ? 'start-Restaurant' : ''}`}>
          </div>
        </div>
        <div className='signupbutton'>
          <button onClick={() => navigate("/Login")}>Log in</button>
        </div>
      </div>
    </div>
  );
}
