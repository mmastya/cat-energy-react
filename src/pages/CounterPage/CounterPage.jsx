import React from "react";
import {Button} from "./../../blocks/Button/Button";

export class CounterPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};
        this.plusClick = this.plusClick.bind(this);
        this.minusClick = this.minusClick.bind(this);
    }
   
    plusClick() {
        this.setState({
            count: this.state.count + 1
          });
          console.log(1);
    }
    
    minusClick () {
        this.setState({
            count: this.state.count - 1
          });
    }
    
    render () {
      return (
            <div> 
                <p>Counter {this.state.count}</p>
                <Button onClick={this.plusClick} name="+" value="2"/>
                <Button onClick={this.minusClick} name="-"/>
            </div>
        );  
    }
} 
