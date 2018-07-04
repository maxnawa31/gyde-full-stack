import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import DefaultProfileImg from '../images/defaultImage.jpeg'
import '../styles/PostItem.css'
export const PostItem = ({ date, profileImageUrl, text, username}) => (
  <div className='post-card-container'>
  <img src={profileImageUrl || DefaultProfileImg} alt={username}/>
    <div className='second-row'>
    <Link className='handle' to = '/'>@{username}<span className='date-time'><Moment format="Do MMM YYYY">
    {date}
  </Moment></span></Link>
    <div className='text-container'>{text}</div>
    </div>
    {/* <div className ='date-time'>
    <Moment format="Do MMM YYYY">
    {date}
  </Moment>
  </div> */}
  </div>

// {/*  */}





  // <div className='post-card-container'>
  // <div className='first-row'>
  //   <img src={profileImageUrl || DefaultProfileImg} alt={username}/>
  //   <Link to = '/'>@{username}</Link>
  //   <span>
  //   <Moment format="Do MMM YYYY">
  //   {date}
  //   </Moment>
  //   </span>
  //   </div>
  //   <div className='second-row'>
  //   <p>{text}</p>
  //   </div>
  //   </div>
  //     {/* <div className='text-container'>
  //     <p>{text}</p>
  //     </div>
  //     </div>
  //   </div> */}
)

