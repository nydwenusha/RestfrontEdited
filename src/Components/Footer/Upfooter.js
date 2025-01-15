import React from 'react'
import { Link } from 'react-router-dom'
import './Css/Upfooter.css'

export default function Upfooter() {
  return (
    <div className='upfootercontain'>
      <div className='contentofupfooter'> 
        Nalanda Anuradhapura Resort
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/Rooms'>Rooms</Link></li>
            <li><Link to='/About'>About</Link></li>
            <li><Link to='/LocalAttraction'>Local Attraction</Link></li>
            <li><Link to='/VehicleRental'>Vehicle Rental</Link></li>
            <li><Link to='/Gallery'>Galerry</Link></li>
            <li><Link to='/Restourents'>Restourent</Link></li>
          </ul>          
         
      </div>
      <div className='adressofguesthouse'>
        <table className='contentofadress'>
          <tbody>
            <tr>
              <td>ADRESS</td>
              <td>ADRESS</td>
            </tr>
            <tr>
              <td>MOBILE NO</td>
              <td>ADRESS</td>
            </tr>
            <tr>
              <td>EMAIL</td>
              <td>ADRESS</td>
            </tr>
          </tbody>
        </table>  
        </div>
    </div>
  )
}
