import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Components/NavigationBar/Navbar';
import './Css/Rooms.css'
import Bottomfooter from '../Components/Footer/Footer';
import Fquestions from '../Components/FQuestions/Fquestions';
import Modal from 'react-modal';

import room1 from '../Sources/room1.jpg';
import room2 from '../Sources/room2.jpg';
import room4 from '../Sources/room1.jpg';
import Roomsforrooms from '../Components/Rooms/Roomsforrooms'
 
Modal.setAppElement('#root');

export default function Rooms() {

  const navigate = useNavigate();

  const gototheroomsbooking = () => {
    navigate('/RoomBooking');
  }
  
  /*const Handel = () => {
    Navigate(-1);
  }*/
  return (
    <div className='roomscontainer'> 
      <Navbar/>
      <div className='mainpictureinrooms'></div>
      <div className='Roomsdescription'>
          <h1>Embrace style and comfort in our Anuradhapura Nalanda Guest House rooms</h1>
          <button onClick={gototheroomsbooking}>Book now</button>
      </div>
      <div className='secondroomcontainer'>
        <div className='roomsoftheguestwithdescription'>
          <Roomsforrooms 
          
          description= 'one ekak' 
          
          imag={room1}/>
          <Roomsforrooms description= 'one ekak' imag={room2}/>
          <Roomsforrooms description= 'one ekak' imag={room4}/>
          <Roomsforrooms description= 'one ekak' imag={room1}/>
          <Roomsforrooms description= 'one ekak' imag={room1}/>
          <Roomsforrooms description= 'one ekak' imag={room1}/>
          <Roomsforrooms description= 'one ekak' imag={room1}/>
          <Roomsforrooms description= 'one ekak' imag={room1}/>
          <Roomsforrooms description= 'one ekak' imag={room1}/>
        </div>
        
      </div>
      <Fquestions/>
      <Bottomfooter/>
      <div>
        <Modal>
          
        </Modal>
      </div>
    </div>
  ) 
}