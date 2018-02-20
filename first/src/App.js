import React, { Component } from 'react';
import './App.css';

const FunctionalComponent = () => (
    <div>This is My Functional Component</div>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <FunctionalComponent />
      </div>
    );
  }
}

export default App;
