import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Display extends Component{

    render(){
        return(
            <div className="display">{this.props.result}</div>
        )
    }
}

Display.propTypes = {
    result: PropTypes.string
};

Display.defaultProps = {
    result: '0'
};

export default Display;