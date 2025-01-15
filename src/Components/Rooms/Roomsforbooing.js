import React, { useState }  from 'react'
import './Css/Rooms.css';
import room1 from '../../Source/room1.jpg';
//import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom'

Modal.setAppElement('#root');
 

export default function Roomsforbooing() {

    const [roomsmodalstate, setRoomsmodalstate] = useState(false);
    const navigate = useNavigate();

    const gotobookingforum = () => {
        navigate('/RoomBooking/forum');
    }

    const roomsmodalclose = () =>{
        setRoomsmodalstate(false);
    }
    const roomsmodalopen = () => {
        setRoomsmodalstate(true);
    }

    const roomspicture = {
        backgroundImage:`url(${room1})`,
        backgroundSize: `cover`, // Cover the entire div
        backgroundPosition: `center`, // Center the image
        backgroundRepeat: `no-repeat`, // Do not repeat the image
        width:`80%`,
        borderTopLeftRadius:`5px`,
        borderBottomLeftRadius:`5px`,
    }

    const styleroompic = {
        width: `100%`,
        height: `250px`,
        backgroundImage: `url(${room1})`, // Replace with your image URL
        backgroundSize: `cover`, // Cover the entire div
    };

  return (
    <div>
        <div className='Roomsforbooingcontainer1'>
            <div className='Roomsforbooingpicture' style={roomspicture} >
                 
            </div>
            <div className='Roomsforbooingdescription'>
                <div style={{margin:'20px', display:'flex',flexDirection:'column',display:'inline'}}>
                    <h3 style={{display:'inline'}}>guest room</h3>
                    <button onClick={roomsmodalopen} style={{display:'inline', marginLeft:'55%'}}>room details</button>
                </div>
                <div style={{width:'100%', height:'5px', backgroundColor:'black'}}></div>
                <div>
                    <p>normal</p>
                    <button id='selectroomsforbooking' onClick={gotobookingforum}>select</button>
                     
                </div>
            </div>
        </div>
        <div className='roomsmodalcontainer'>
            <Modal
                isOpen={roomsmodalstate}
                id='roomsmodal'
                className='rooms-modal-content'
            >
                <div className='roomsmodalabovepicture' style={styleroompic}></div>
                <div className='roomsmodaldescription'>
                    <p>hi</p>
                </div>
                <button onClick={roomsmodalclose}>close</button>
            </Modal>
        </div>
    </div>
  )
}