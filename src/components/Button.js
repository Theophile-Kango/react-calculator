import React from 'react';
import PropTypes from 'prop-types';

function Button({ name, color, wide }) {
  return (
    <button
      type="button"
      className={color}
      id={wide ? 'zero' : null}
    >
      {name}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

Button.defaultProps = {
  name: '',
  color: '',
  wide: false,
};

export default Button;
