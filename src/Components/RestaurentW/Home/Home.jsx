import React from 'react'
import "./Home.css";
import MultiItemCarousel from './MultiItemCarousel.jsx';
import RestaurantCard from '../Restaurant/RestaurantCard.jsx';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllRestaurantsAction } from '../State/Restaurant/Action.js';
import { findCart } from '../State/Cart/Action.js';





const restaurants=[1,1,1,1,1,1,1,1]
const Home = () => {

     
         
 

  return (
    <div className='pb-10'>
        <section className='banner -z-50 relative flex flex-col justify-center
    item-cente'>
 
              <div className='w-[50vw] z-10 text-center'>
                   <p className='text-2xl lg:text-6x1 font-bold z-10 py-5'>Order what you want...</p>  
                   <p className='z-10 text-gray-300 text-xl lg:text-4xl'>Your Favorite Food delivery Partner.</p>
              </div>
              <div className='cover absolute top-0 left-0 right-0'>

              </div>
              <div className='fadout'>

              </div>

        </section>
        <section className='p-10 lg:py-10 lg:px-20'>
            <p className='text-2xl font-semibold text-gray-400 py-3 pb-10'>Top
                 Meels</p>
            <MultiItemCarousel/>
        </section>
        <section className='px-5 lg:px-20 pt-10'>
            <h1 className='text-2xl font-semibold text-gray-400 pb-8'>Order From Our Handpicked Favorites</h1>
            <div className='flex flex-wrap items-center justify-around gap-5'>
                {
                    restaurants.map((item)=><RestaurantCard/>)

                    
                  
                 

                  
                
                    
            }

            </div>
        </section>

          
    </div>
  )
}

export default Home
