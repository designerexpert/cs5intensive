import React from 'react';

import Movie from './Movie';

class MovieList extends React.Component {
  state = {
    movies: [
      {
        id: 1,
        title: 'Inception',
        likes: 0,
      },
      {
        id: 2,
        title: 'Lord of The Rings',
        likes: 0,
      },
      {
        id: 3,
        title: 'Black Panther',
        likes: 0,
      },
      {
        id: 4,
        title: 'Jumanji',
        likes: 0,
      },
    ],
    history: [],
  };

  render() {
    return (
      <div>
        <h1>
          Welcome to: {this.props.name}
        </h1>
        <p>This let's you indent your JSX better</p>

        {this.state.movies.map(post => {
          return (
            <Movie
              key={post.id}
              post={post}
              onDelete={this.removePost}
              upVote={this.upVote}
              downVote={this.downVote}
            />
          );
          // return <ListItem key={post.id} title={post.title} body={post.body} />;
        })}
      </div>
    );
  }

  upVote = id => {
    const movies = Array.from(this.state.movies);
    const movie = movies.find(m => m.id === id);
    movie.likes = movie.likes + 1;
    this.setState(prevState => {
      const state = { ...prevState };
      delete state.history;
      const history = [...prevState.history, state];
      return { movies, history }
    });
  }

  downVote = id => {
    const movies = Array.from(this.state.movies);
    const movie = movies.find(m => m.id === id);
    movie.likes = movie.likes - 1;
    this.setState(prevState => {
      const state = { ...prevState };
      delete state.history;
      const history = [...prevState.history, state];
      return { movies, history }
    });
  }

  removePost = id => {
    // console.log('clicked remove', id)
    const filteredPosts = this.state.posts.filter(post => {
      return post.id !== id;
    });

    this.setState({ posts: filteredPosts });
  };
}

export default MovieList;