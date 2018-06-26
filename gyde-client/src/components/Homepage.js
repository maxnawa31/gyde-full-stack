import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Homepage.css'

const Homepage = () => (
    <div className='text-container'>
        <div className='main-text'>
          <h2>We are here to change<br/>Ed-Tech for the better.</h2>
        </div>
        <div className='description-text'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
        <div className='button-container'>
          <button className='button'><Link to='/signup'>Sign Up</Link></button>
          <button className='button'><Link to ='/signin'>Sign In</Link></button>
        </div>
    </div>



)

export default Homepage;
