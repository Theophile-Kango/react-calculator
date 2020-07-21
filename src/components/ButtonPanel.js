import React from 'react';
import Button from './Button';

class ButtonPanel extends React.Component{

    constructor(){
        super();
        this.state = {
            name: ""
        }
    }

    renderComponent(i){
        return <Button name={i} />;
    }

    render(){
        return(
            <div className="buttons">
                <div className="group-1">
                    <Button name={this.renderComponent("AC")} />
                    <Button name={this.renderComponent("+/-")} />
                    <Button name={this.renderComponent("%")} />
                    <Button name={this.renderComponent("÷")} />
                </div>
                <div className="group-2">
                    <Button name={this.renderComponent("7")} />
                    <Button name={this.renderComponent("8")} />
                    <Button name={this.renderComponent("9")} />
                    <Button name={this.renderComponent("X")} />
                </div>
                <div className="group-3">
                    <Button name={this.renderComponent("4")} />
                    <Button name={this.renderComponent("5")} />
                    <Button name={this.renderComponent("6")} />
                    <Button name={this.renderComponent("-")} />
                </div>
                <div className="group-4">
                    <Button name={this.renderComponent("1")} />
                    <Button name={this.renderComponent("2")} />
                    <Button name={this.renderComponent("3")} />
                    <Button name={this.renderComponent("+")} />
                </div>
                <div className="group-4">
                    <Button name={this.renderComponent("0")} />
                    <Button name={this.renderComponent(".")} />
                    <Button name={this.renderComponent("=")} />
                </div>
            </div>
        )
    }
}

export default ButtonPanel;