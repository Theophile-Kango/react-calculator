import React from 'react';
import PropTypes from 'prop-types';
class Button extends React.Component{

    render(){  
        return(
            <button 
                className={this.props.color}
                id={this.props.wide ? "zero" : null}
            >
                {this.props.name}
            </button>
        )
    }
}

Button.propTypes = {
    name: PropTypes.string,
    color: PropTypes.string,
    wide: PropTypes.bool
};

export default Button;