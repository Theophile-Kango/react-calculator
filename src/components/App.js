import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends Component {
  constructor() {
    super();
    this.state = {
      total: null,
      next: null,
      operation: null
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
      <div id="component" className="calculator">
        <Display result={this.strResult()} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
