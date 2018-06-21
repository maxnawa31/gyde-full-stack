import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../styles/Navbar.css';
class Navbar extends Component {
  render() {
    return(

      <div className='navbar'>
        <Link to ='/'>Gyde</Link>
        <Link to = '/'>Home</Link>
        <Link to = '/signup'>Sign Up </Link>
        <Link to = '/signin'>Sign In </Link>
      </div>

    );
  }
}


function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps, null)(Navbar);