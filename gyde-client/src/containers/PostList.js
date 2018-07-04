import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../store/actions/posts';
import { PostItem } from '../components/PostItem';
import '../styles/PostList.css'
class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  render() {
    const { posts } = this.props;
    let postList = posts.map(p => {
      return(<PostItem
      key = {p._id}
      date = {p.createdAt}
      text = {p.text}
      username = {p.user.username}
      profileImageUrl={p.user.profileImageUrl}
      />)
    })
  return (
    <div className='post-list-container'>
      {postList}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, { fetchPosts })(PostList);



