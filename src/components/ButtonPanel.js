/* eslint no-unused-expressions: [2, { allowTernary: true }] */
import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

class ButtonPanel extends React.Component {

  renderComponent(val) {
    val === '0' ? this.wide = true : this.wide = false;
    const operations = ['÷', 'x', '-', '+', '='];
    this.color = !operations.includes(val) ? 'numerics' : null;
    return <Button 
      name={val}
      key={val} 
      wide={this.wide} 
      color={this.color} 
      handleClick={this.clickHandler} 
    />;
  }

  render() {
    const group1 = ['AC','+/-','%','÷'];
    const group2 = ['7','8','9','x'];
    const group3 = ['4','5','6','-'];
    const group4 = ['1','2','3','+'];
    const group5 = ['0','.','='];
    
    return (
      <div className="buttonPanel">
        <div>
          {group1.map(elt => this.renderComponent(elt))}
        </div>
        <div>
          {group2.map(elt => this.renderComponent(elt))}
        </div>
        <div>
          {group3.map(elt => this.renderComponent(elt))}
        </div>
        <div>
          {group4.map(elt => this.renderComponent(elt))}
        </div>
        <div>
          {group5.map(elt => this.renderComponent(elt))}
        </div>
      </div>
    );
  }
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
