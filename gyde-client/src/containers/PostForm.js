import React, { Component } from 'react';
import {connect} from 'react-redux';
import { newPost } from '../store/actions/posts';
import '../styles/PostForm.css'
class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post:""
    }
  }
  handleNewPost = event => {
    event.preventDefault();
    this.props.newPost(this.state.post);
    this.setState({ post: ""})
    this.props.history.push('/');
  }
  render() {
    return(
      <form className='form-container' onSubmit={this.handleNewPost}action="">
        {this.props.errors.message && (
          <div>
            {/* {this.props.errors.message} */}
          </div>
        )}
        <input className='input' type="text"
        value={this.state.post}
        onChange={e => this.setState({post:e.target.value})}/>
          <button className='text-button' type='submit'>
          Add a Message
          </button>
      </form>
    )
  }
}

function mapStateToProps(state) {
  return {
    errors: state.errors
  }
}

export default connect(mapStateToProps, { newPost })(PostForm)