import React from 'react';
import Post from './components/post';
import fetchApi from './api/fetchApi';

class App extends React.Component {
  constructor() {
    super();
    this.state = { posts: [] };
  }

  async componentDidMount() {
    const response = await fetchApi;
    const json = await response.json();
    this.setState({ posts: json });
  }

  renderPosts(posts) {
    return posts.map(post => {
      return (
        <Post key={post.id} props={post} />
      );
    })
  }

  render() {
    const posts = this.state.posts;
    if (posts.length) {
      return (
        <div className="App">
          {this.renderPosts(posts)}
        </div>
      );
    } else {
      return <div>Loading...</div>
    }

  }
}

export default App;
