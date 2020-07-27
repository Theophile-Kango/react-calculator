/* eslint no-unused-expressions: [2, { allowTernary: true }] */
import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

class ButtonPanel extends React.Component {
  renderComponent(val) {
    val === '0' ? this.wide = true : this.wide = false;
    const operations = ['÷', 'x', '-', '+', '='];
    this.color = !operations.includes(val) ? 'numerics' : null;
    const { handleClick } = this.props;
    return (
      <Button
        name={val}
        key={val}
        wide={this.wide}
        color={this.color}
        handleClick={handleClick}
      />
    );
  }

  render() {
    const listGroup = [
      ['AC', '+/-', '%', '÷'], ['7', '8', '9', 'x'], ['4', '5', '6', '-'], ['1', '2', '3', '+'], ['0', '.', '='],
    ];

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

ButtonPanel.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default ButtonPanel;
