import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import MovieList from './Movies/MovieList';

ReactDOM.render(
  <MovieList name="The Movie Voter" />,
  document.getElementById('app')
);
