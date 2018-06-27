import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Homepage from '../components/Homepage'
import AuthForm from '../components/AuthForm';
import { authUser } from '../store/actions/auth';
import { removeError } from '../store/actions/errors';
const Main = props => {
  const { authUser, errors, currentUser } = props;
  return (
    <div className="container">
      <Switch>
        <Route exact path='/' render={props => <Homepage currentUser = {currentUser} {...props}/>}/>
        <Route exact path='/signin' render={props => <AuthForm removeError={removeError} errors={errors} onAuth={authUser} buttonText='Log In' heading='Welcome Back' {...props}/>}/>
        <Route exact path='/signup' render={props => <AuthForm removeError={removeError} errors={errors} onAuth={authUser} signup = 'signup' buttonText='Sign Up' heading='Join Gyde Today' {...props}/>}/>
        </Switch>
    </div>
  )
}


function mapStateToProps(state) {
  debugger;
  return {
    currentUser: state.currentUser,
    errors: state.errors
  };
}
export default withRouter(connect(mapStateToProps, { authUser, removeError })(Main));