import React, { Component } from 'react';
import './App.css';

const FunctionalComponent = ({name, lambdaClass}) => (
  <div className='greeting'>{`Hello ${name} from ${lambdaClass}!`}</div>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <FunctionalComponent name={'Moises'} lambdaClass={'CS5'}/>
      </div>
    );
  }
}

export default App;
