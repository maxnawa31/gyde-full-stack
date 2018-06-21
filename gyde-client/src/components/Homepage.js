import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Homepage.css'

const Homepage = () => (
    <div className='homepage-container'>
      <div className ='left-half'>
      <p className='heading'>We are here to<br/> change Ed-Tech<br/> for the better</p>

      <p className='sub-heading'>Keeping your entire team on the same page is a huge undertaking - but it’s the vital component to getting work done efficiently and collaboratively. Loom enables every team to work together, all in the same space.</p>

        <div className='button-container'>
      <button className='signup-button'><Link to = '/signup' >Sign Up Here </Link></button>
      <button className='signin-button'><Link to = '/signin' > Sign In Here </Link></button>
    </div>
    </div>
    <div className='right-half'>
      <div className='bullet-container'>
        <div className='bullet'>
          <div className='circle-green'/>
          <h3>Connect with professors</h3>
        </div>
        <div className='bullet'>
          <div className='circle-blue'/>
          <h3>Share your research to the world</h3>
        </div>
      <div className='bullet'>
        <div className='circle-purple'></div>
        <h3>Expand your knowledge</h3>
      </div>
      <div className='bullet'>
        <div className='circle-red'></div>
        <h3>Contribute to a community of learners</h3>
      </div>
    </div>
    </div>


    </div>
)

export default Homepage;
