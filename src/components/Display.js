import React, {Component} from 'react';

class Display extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>{this.props.result}</div>
        )
    }
}

export default Display;