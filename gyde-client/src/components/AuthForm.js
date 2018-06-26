import React, { Component } from 'react';
import '../styles/AuthForm.css'
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


  handleSubmit = e => {
    e.preventDefault();
    const authType = this.props.signup ? 'signup' : 'signin';
    this.props.onAuth(authType, this.state).then(() => {
      this.props.history.push('/')
    }).catch(() => {
      return;
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  render(){
  let signUpForm = ''
  const { email, username, password, profileImageUrl } = this.state;
  const { heading, buttonText, signup, errors, removeError, history } = this.props;


  if(signup) {
    signUpForm = [<label htmlFor="username">Username</label>,

    <input className='text-box' id='username' name='username' onChange={this.handleChange} value={username}type="text"/>,


    <label htmlFor="image-url">Image Url</label>,


    <input className='text-box' id='image-url' name='profileImageUrl' onChange={this.handleChange} type="text"/>
  ]

  }

  history.listen(() => {
    removeError();
  })
  return(
    <div>
      <form className='flex-container' onSubmit={this.handleSubmit}>
        <h2>{heading}</h2>
        {errors.message && (<div>{errors.message}</div>)}
        <label htmlFor="email">Email</label>
        <input className='text-box' id='email' name='email' onChange={this.handleChange} value={email}type="text"/>
        <label htmlFor="password">Password</label>
        <input className='text-box' id='password' name='password' onChange={this.handleChange} type="password"/>
        {
          signUpForm
        }
        <button type='submit'>{buttonText}</button>
      </form>
    </div>
  )
  }
}