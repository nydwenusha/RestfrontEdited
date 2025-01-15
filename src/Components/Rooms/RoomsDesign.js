import React from 'react';
import './Css/RoomsDesign.css';

export default function RoomsDesign({description, imag}) {
  return (
    <div className='roomscontainerwithrectangle'>
        <div className='roomviewrec'>
            <div className='roomspic'><img id= 'roomsdesign' src={imag} alt='rooms'></img></div>
            <div className='roomsdescription'>
                <a href='./Rooms' id='roomsbooknowbtton'>{description}</a>
            </div>
        </div>
    </div>
  )
}
