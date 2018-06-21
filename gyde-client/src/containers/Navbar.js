import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Navbar extends Component {
  render() {
    return(
      <div>
        <div>
          <Link to ='/'>
          <img src="" alt=""/>
          </Link>
        </div>
        <ul>
          <li>
            <Link to='/signup'>Sign Up</Link>
          </li>
          <li>
            <Link to='/signin'>Sign Ip</Link>
          </li>
        </ul>
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