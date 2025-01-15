import React from 'react'
import Slider from 'react-slick';
import Navbar from '../Components/NavigationBar/Navbar';
import './Css/Home.css'
import Upfooter from '../Components/Footer/Upfooter';
import Bottomfooter from '../Components/Footer/Footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';
import Mapintegration from '../Components/Map/Map';
 
import { Typography, Divider, Box, Link } from '@mui/material';
//import BookingForm from '../Components/Roomsbookingrow/BookingForm';

import room1 from '../Sources/room1.jpg';
import room2 from '../Sources/room2.jpg';
import room3 from '../Sources/room4.jpg';
import room4 from '../Sources/room1.jpg';
import room5 from '../Sources/room4.jpg';

import Room from '../Components/Rooms/Rooms';
 
 

export default function Home() {

  const navigate = useNavigate();

  const roomsData = [
    { id: 1, description: 'This is the double bed room 1', imag: room1},
    { id: 2, description: 'This is the single bed room 2', imag: room2 },
    { id: 3, description: 'This is the deluxe room 3', imag: room3 },
    { id: 4, description: 'This is the deluxe room 4', imag: room4 },
    { id: 5, description: 'This is the deluxe room 5', imag: room5 },
    { id: 6, description: 'This is the deluxe room 6', imag: room1 },
    { id: 7, description: 'This is the deluxe room 7', imag: room5 },
    { id: 8, description: 'This is the deluxe room 8', imag: room3 },
    { id: 9, description: 'This is the deluxe room 9', imag: room4 }
  ];

  //here we explian the prevarrow and next arrow 
  const PrevArrow = (props) => {
    const { className, style, onClick } = props; // Destructure only necessary props
    return (
      <button className={className} style={{ ...style, display: 'block' }} onClick={onClick}>
        Prev
      </button>
    );
  };
  
  const NextArrow = (props) => {
    const { className, style, onClick } = props; // Destructure only necessary props
    return (
      <button className={className} style={{ ...style, display: 'block' }} onClick={onClick}>
        Next
      </button>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true, // Enable center mode
    centerPadding: '0px', // Remove default padding
    nextArrow:  <NextArrow/>,
    prevArrow: <PrevArrow/>,
    customPaging: i => (
      <button className="dot">
        {i + 1}
      </button>
    ),
    dotsClass: "slick-dots custom-dots",
  };

  const booknow = () => {
    navigate('/RoomBooking');
  }

  return (
    <div>
      <div className='Homecontain'>
        <Navbar/>
        <div className='mainpicture'>
          <button id='Booknow' onClick={booknow}>Book Now</button>
        </div>
        <div style={{backgroundColor:'#dcdcdc'}}>
        <div className='welcome-description'>
          <h1 className='welcome-title'>Nalanda Anuradhapura Resort</h1>
          <p className='welcome-paragraph'>
            Nestled in the heart of Sri Lanka’s cultural capital, Nalanda Anuradhapura Guest House offers a peaceful retreat surrounded 
            by history and nature. Located just moments away from the ancient ruins and sacred stupas of Anuradhapura, our guest house 
            combines traditional charm with modern comforts. Relax in cozy rooms with scenic views of the lush landscapes or unwind in 
            our tranquil garden. Enjoy authentic Sri Lankan cuisine in our dining area or take a leisurely stroll along the serene lakes 
            nearby. Whether you’re exploring the UNESCO heritage sites, cycling through the town, or meditating at the renowned Mihintale, 
            Nalanda Anuradhapura Guest House is your gateway to a tranquil and enriching experience in the cultural heart of Sri Lanka.
          </p>
        </div>
        </div>
        <div> 
          here i use the rooms booking forum
        </div>
        <div className='Homemidlecontainer'>
          <div className='homeRooms'>
            <Slider {...settings}>
              {roomsData.map((room) => (
                <div key={room.id} className="room-wrapper">
                  <Room description={room.description} imag = {room.imag}/>
                </div>
              ))}
            </Slider>
          </div>
          <div className='offerpackages'>
            <div className='flowrooms'>
       
            </div>
            <div className='rollingbutton'>
           
            </div>
          </div>
        </div>
        <div className='Homemidlecontainer' style={{backgroundColor:'#dcdcdc'}}>
          <div className='features'>
          <p id='wellcomeparagraph'>
            wellcome to features
            FEATURED AMENITIES ON-SITE
            Sustainability
            Restaurant
            Bar
            Fitness Center
            Spa
            Outdoor Pool
            Meeting Space
            Free Wifi
            Beach Access
            Game Room
            Gift Shop
            Dry Cleaning Service
            Laundry
            Room Service
            24 Hour Room Service
            Wake up Calls
            Daily Housekeeping
            Turndown Service
            Mobile Key
            Service Request
          </p>
          </div>
          <div className='propertydetails'>
          <p id='wellcomeparagraph'>
            wellcome to propertydetails
          </p>
          </div>
          <div className='questions'>
          <p id='wellcomeparagraph'>
            wellcome to questions
          </p>
          </div>
          <div className='kitchen'>
          <p id='wellcomeparagraph'>
            wellcome to kitchen
          </p>
          </div>
          <div className='location'>
            <div className= 'insidelocation' style={{display:'flex', flexDirection:'raw', Padding:'10px'}}>
              <div style={{width:'50%'}}>
                <Box
                  style={{
                  width: '100%',
                  padding: '20px',
                   
                  borderRadius: '10px',
                  
                   
                  }}
                >
                  <Typography variant="h4" style={{ marginBottom: '10px' }}>
                    OUR LOCATION
                  </Typography>

                  <Box style={{ marginBottom: '15px' }}>
                    <Typography variant="h5" style={{ marginBottom: '5px' }}>
                      GETTING HERE
                    </Typography>
                    <Typography>
                      Nalanda Anuradhapura Resort
                      <br />
                      1 Okanda Road, Hiddaruwa, Naape, Kosgoda, Sri Lanka, 80570
                    </Typography>
                    <Link
                      href="tel:+94783967643"
                      style={{ color: '#19B5FE', textDecoration: 'none' }}
                    >
                      Tel: +94 783967643
                    </Link>
                  </Box>

                  <Divider
                    style={{
                      width: '40%',
                      height: '5px',
                      backgroundColor: 'white',
                      margin: '10px auto',
                    }}
                  />

                  <Box style={{ marginBottom: '15px' }}>
                    <Typography variant="h6" style={{ marginBottom: '5px' }}>
                      Bandaranaike International Airport
                    </Typography>
                    <Typography>
                      Distance From Property: 118.0 KM
                      <br />
                      Phone Number: +94 112-264444
                    </Typography>
                    <Link
                      href="https://www.colombo-airport.com/"
                      style={{ color: '#19B5FE', textDecoration: 'none' }}
                    >
                      Visit Website
                    </Link>
                  </Box>

                  <Divider
                    style={{
                      width: '40%',
                      height: '5px',
                      backgroundColor: 'white',
                      margin: '10px auto',
                    }}
                  />

                  <Box style={{ marginBottom: '15px' }}>
                    <Typography variant="h6" style={{ marginBottom: '5px' }}>
                      Other Transportation
                    </Typography>
                    <Typography>
                      <strong>On-Property:</strong>
                      <br />
                      Private Car Service
                      <br />
                      Limousine/Van Service
                      <br />
                      24-Hour Hotel Limo Service
                    </Typography>
                    <Typography style={{ marginTop: '10px' }}>
                      <strong>Nearby:</strong>
                      <br />
                      Bus Station:{' '}
                      <Link
                        href="https://maps.app.goo.gl/aBQ2C4rgyajxpeWc7"
                        style={{ color: '#19B5FE', textDecoration: 'none' }}
                      >
                        Anuradhapura Entrance
                      </Link>
                      <br />
                      Train Station:{' '}
                      <Link
                        href="https://maps.app.goo.gl/8qAe4R7raceDQsdP6"
                        style={{ color: '#19B5FE', textDecoration: 'none' }}
                      >
                        Sravasthipura Railway Station
                      </Link>
                    </Typography>
                  </Box>

                  <Divider
                    style={{
                      width: '40%',
                      height: '5px',
                      backgroundColor: 'white',
                      margin: '10px auto',
                    }}
                  />
                </Box>
              </div>
              <div>
              <Mapintegration/>
              </div>
            </div>
          </div>
        </div>    
      </div>
      <div className='footers1'>
        <Upfooter/>
        </div>
      <div className='footers2'>
        <Bottomfooter/>
      </div>  
    </div>
  )
}
