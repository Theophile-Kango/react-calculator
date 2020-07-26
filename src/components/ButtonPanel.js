/* eslint no-unused-expressions: [2, { allowTernary: true }] */
import React from 'react';
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
      handleClick={this.handleClick} 
    />;
  }

  render() {
    const group1 = ['AC','+/-','%','÷'];
    const group2 = ['7','8','9','x'];
    const group3 = ['4','5','6','-'];
    const group4 = ['1','2','3','+'];
    const group5 = ['0','.','='];
    const listGroup = [group1, group2, group3, group4, group5];
    
    return (
      <div className="buttonPanel">
        {
          listGroup.map(group => (
            <div key={group}>
              {group.map(elt => this.renderComponent(elt))}
            </div>
          ))
        }
      </div>
    );
  }
}

export default ButtonPanel;
