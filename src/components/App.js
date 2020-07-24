import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calcualate from '../logic/calculate';

class App extends Component {
  constructor() {
    super();
    this.state = {
      result: '0',
    };
  }

  render() {
    const { result } = this.state;
    return (
      <div id="component" className="calculator">
        <Display result={result} />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
