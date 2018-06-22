import React, { Component } from 'react';

export default class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      profileImageUrl: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  render(){
  const { email, username, password, profileImageUrl } = this.state;
  const { heading, buttonText, signup } = this.props;
  return(
    <div>
      <form onSubmit={this.handleSubmit}>
        <h2>{heading}</h2>
        <label htmlFor="email">Email</label>
        <input id='email' name='email' onChange={this.handleChange} value={email}type="text"/>
        <label htmlFor="password">Password</label>
        <input id='password' name='password' onChange={this.handleChange} type="password"/>
        {
          signup && (
            <div>
              <label htmlFor="username">username</label>
              <input id='username' name='username' onChange={this.handleChange} value={email}type="text"/>
              <label htmlFor="image-url">Image Url</label>
              <input id='image-url' name='profileImageUrl' onChange={this.handleChange} type="text"/>
            </div>
          )
        }
      </form>
    </div>
  )
  }
}