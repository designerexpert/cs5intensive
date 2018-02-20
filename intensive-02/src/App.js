import React, { Component } from 'react';
import './App.css';

class ClassComponent extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  componentDidMount() {
    this.setState({ blanket: this.props.blanket });
  }
  render() {
    return (
      <div className='greeting'>{`Hello, my blanket is called: ${this.state.blanket}`}</div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <ClassComponent blanket={'Blanky'} />
      </div>
    );
  }
}

export default App;
