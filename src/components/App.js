import React, {Component} from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

class App extends Component {

  constructor(){
    super();
    this.state = {
      result: "0"
    }
  }

  render(){
    return (
      <div id="component" className="calculator">
        <Display result={this.state.result} />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
