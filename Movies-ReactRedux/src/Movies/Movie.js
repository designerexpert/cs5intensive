import React from 'react';

class Movie extends React.Component {
  state = {
    showBody: false,
    showTitle: true,
    status: 'not mounted',
  };

  handleUpvote = () => {
    let id = this.props.post.id;
    this.props.upVote(id)
  }

  handleDownVote = () => {
    let id = this.props.post.id;
    this.props.downVote(id)
  }

  render() {
    // runs when component loads and on every state change
    // console.log('rendered');

    const post = this.props.post;

    return (
      <div className="list-item">
        <h1>
          {post.title} Likes: {post.likes}
        </h1>

        <button onClick={() => { this.props.onDelete(post.id) }}>Delete</button>
        <button onClick={this.handleUpvote}>UpVote</button>
        <button onClick={this.handleDownVote}>DownVote</button>

        {this.state.showBody === true ? <div>{post.body}</div> : null}
      </div>
    );
  }

  // componentDidMount() {
  //   // you do your AJAX calls
  //   // console.log('mounted');
  //   window.setTimeout(() => {
  //     this.setState({ status: 'mounted' });
  //   }, 1000);
  // }

  toggleBody = () => {
    // this.state.showBody = true; // bad panda!!!
    this.setState(prevState => {
      return { showBody: !prevState.showBody };
    });
  };
}

export default Movie;