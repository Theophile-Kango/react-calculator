import React from 'react';
import Button from './Button';

class ButtonPanel extends React.Component{

    constructor(){
        super();
        this.state = {
            name: "",
            color: this.color,
            wide: this.wide
        }
    }


    renderComponent(val){
        val === "0" ? this.wide = true : this.wide = false;
        const operations = ['÷','x','-','+','='];
        this.color = !operations.includes(val) ? "numerics" : null;
        return <Button name={val} wide={this.wide} color={this.color} />;
    }

    render(){
        return(
            <div className="buttonPanel">
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
                    {this.renderComponent("x")}
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