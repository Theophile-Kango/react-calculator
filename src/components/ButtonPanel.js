import React from 'react';
import Button from './Button';

class ButtonPanel extends React.Component{

    constructor(){
        super();
        this.state = {
            name: ""
        }
    }

    renderComponent(val){
        return <Button name={val} />;
    }

    render(){
        return(
            <div className="buttons">
                <div className="group-1">
                    {this.renderComponent("AC")}
                    {this.renderComponent("+/-")}
                    {this.renderComponent("%")} 
                    {this.renderComponent("÷")} 
                </div>
                <div className="group-2">
                    {this.renderComponent("7")} 
                    {this.renderComponent("8")}
                    {this.renderComponent("9")}
                    {this.renderComponent("X")}
                </div>
                <div className="group-3">
                    {this.renderComponent("4")} 
                    {this.renderComponent("5")}
                    {this.renderComponent("6")}
                    {this.renderComponent("-")}
                </div>
                <div className="group-4">
                    {this.renderComponent("1")}
                    {this.renderComponent("2")}
                    {this.renderComponent("3")}
                    {this.renderComponent("+")}
                </div>
                <div className="group-4">
                    {this.renderComponent("0")}
                    {this.renderComponent(".")}
                    {this.renderComponent("=")}
                </div>
            </div>
        )
    }
}

export default ButtonPanel;