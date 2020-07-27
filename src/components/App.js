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
      next: null
    };
    this.handleClick = this.handleClick.bind(this);
    this.strResult = this.strResult.bind(this);
  }

  handleClick(buttonName) {
    const calculator = calculate(this.state, buttonName);
    this.setState(calculator);
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
        {console.log(this.state)}
      </div>
    );
  }
}

export default App;
