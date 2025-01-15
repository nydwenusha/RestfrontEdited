import React, { useState } from 'react'
import './Css/Rooms.css';
import Modal from 'react-modal';

//here you try to give the inline style for the image in the roomspic
Modal.setAppElement('#root');

export default function Roomsforrooms({description, imag}) {

    const [roomsmodalstate, setRoomsmodalstate] = useState(false);

    const roomsmodalclose = () =>{
        setRoomsmodalstate(false);
    }
    const roomsmodalopen = () => {
        setRoomsmodalstate(true);
    }

    const styleroompic = {
        width: `100%`,
        height: `520px`,
        backgroundImage: `url(${imag})`, // Replace with your image URL
        backgroundSize: `cover`, // Cover the entire div
    };

    //<img id= 'roomsdesign' src={imag} alt='rooms'></img>
  return (
    <div className='roomscontainerwithrectangle2'>
        <div className='roomviewrecforrooms2'>
            <div  style={styleroompic}></div>
            <div className='roomsdescription'>
                <p className='roomsbooknowbttonp' >{description}</p>
                <br></br>
                <div className='roomsseperationline'></div>
                 
                <button id='roomsviewmorelink' onClick={roomsmodalopen}>view more</button>
            </div>
        </div>
        <div className='roomsmodalcontainer'>
            <Modal
                isOpen={roomsmodalstate}
                id='roomsmodal'
                className='roomsmodalcontent'
                overlayClassName='roomsmodaloverlay'
            >
                <div className='roomsmodalabovepicture' style={styleroompic}>
 
                </div>
                <div className='roomsmodalbody'>
          <h2 className='roomsmodaltitle'>Deluxe Ocean View Room</h2>
          <p className='roomsmodaldescription'>{description}</p>
          <div className='roomsmodaldetails'>
            <h3>Room Overview</h3>
            <p>Deluxe Ocean View</p>
            <h3>Beds and Bedding</h3>
            <p>Maximum occupancy: 3</p>
            <p>1 King Bed</p>
            <p>Rollaway beds permitted: 1</p>
            <p>Cribs permitted: 1</p>
            <p>Maximum cribs/rollaway beds permitted: 1</p>
            <p>Pillowtop mattress and Duvet</p>
            <h3>Room Features</h3>
            <p>42sqm/452sqft</p>
            <p>Air-conditioned</p>
            <p>This room is non-smoking</p>
            <p>Outdoor spaces: balcony (1)</p>
            <p>Living/sitting area</p>
            <h3>Bath and Bathroom Features</h3>
            <p>Marble bathroom</p>
            <p>Separate bathtub and shower</p>
            <p>Lighted makeup mirror</p>
            <p>Hair dryer</p>
            <p>Robe</p>
            <p>Slippers</p>
            <h3>Furniture and Furnishings</h3>
            <p>Sofa</p>
            <p>Chair, oversized</p>
            <p>Alarm clock</p>
            <p>Safe, in room</p>
            <p>Desk, writing/work, electrical outlet</p>
            <p>Iron and ironing board</p>
            <h3>Food & Beverages</h3>
            <p>Room service, 24-hour</p>
            <p>Bottled water, complimentary</p>
            <p>Coffee/tea maker</p>
            <p>Instant hot water</p>
            <p>Minibar</p>
            <h3>Kitchen Features</h3>
            <p>Mini fridge</p>
            <h3>Internet and Phones</h3>
            <p>Phones</p>
            <p>Phone features: cordless phone, voicemail, and speaker phone</p>
            <p>Wireless internet, complimentary</p>
            <h3>Entertainment</h3>
            <p>Plug-in, high-tech room</p>
            <p>Premium movie channels</p>
            <p>Cable/satellite</p>
            <p>International cable/satellite</p>
            <p>CNN, ESPN, and HBO</p>
            <p>Radio</p>
            <h3>Accessible Room Features</h3>
            <p>This room type does not offer mobility accessible rooms</p>
            <p>This room type does not offer accessible rooms with roll-in showers</p>
            <p>This room type does not offer hearing accessible rooms</p>
          </div>
          
        </div>
                <button onClick={roomsmodalclose}>close</button>
                
            </Modal>
        </div>
    </div>
      
  )
}
