import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../styles/Navbar.css';
import { logout }from '../store/actions/auth'
class Navbar extends Component {
  logout = e => {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    return(

      <div className='navbar'>
        <Link to ='/'>Gyde</Link>
        <Link to = '/'>Home</Link>


        {
          this.props.currentUser.isAuthenticated ? (

            [<Link to = {`/users/${this.props.currentUser.user.id}/posts/new`}> New Post</Link>,
            <a onClick={this.logout}>Logout</a>
          ]
          )
          :
        (
      [<Link to = '/signup'>Sign Up </Link>,
        <Link to = '/signin'>Sign In </Link>
      ]
        )
        }
        </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps, {logout})(Navbar);