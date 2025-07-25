// src/Posts.js

import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false,
    };
  }

  loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        const postItems = data.map(item => new Post(item.id, item.title, item.body));
        this.setState({ posts: postItems });
      })
      .catch(error => {
        console.error('Error loading posts:', error);
        this.setState({ hasError: true });
      });
  }

  
  componentDidMount() {
    this.loadPosts();
  }
componentDidCatch(error, info) {
    this.setState({ hasError: true });
    alert('Something went wrong while displaying the posts.');
    console.error('Error info:', info);
  }
  render() {
  return (
    <div>
      <h2>Posts Component</h2>
      {this.state.posts.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}
}

export default Posts;
