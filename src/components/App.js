import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
class App extends Component {
  constructor() {
    super();
    this.state = {
      total: null,
      operation: null,
      next: null,
    };
    this.handleClick = this.handleClick.bind(this);
    this.strResult = this.strResult.bind(this);
  }

  handleClick(buttonName) {
    this.setState(
      { 
        total: calculate(this.state, buttonName)
      }
    );
    console.log(this.state)
  }

  strResult() {
    const { total, next, operation } = this.state;
    const result = `${total}${operation}${next}`.replace(/null/g, '');
    return result === '' ? undefined : result;
  }

  render() {
    return (
      <div className="calculator">
        <Display result={this.strResult()} />
        <ButtonPanel handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
