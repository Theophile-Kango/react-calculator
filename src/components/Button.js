import React from 'react';
import PropTypes from 'prop-types';
function Button({ name, color, wide, handleClick }) {
  return (
    <button
      type="button"
      className={color}
      id={wide ? 'zero' : null}
      onClick={() => handleClick(name)}
    >
      {name}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  wide: PropTypes.bool,
  handleClick: PropTypes.func,
};

Button.defaultProps = {
  name: '',
  color: '',
  wide: false,
  handleClick: () => {}
};

export default Button;
