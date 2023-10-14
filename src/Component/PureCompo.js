
import React, { PureComponent } from "react";

class PureCompo extends PureComponent {
    constructor(){
        super()
        this.state = {
            count : 0
        };
    }
    render(){
        return(
            <>
            <h2>PureComponent Function</h2>
            <h3>count:{this.state.count}</h3>
            <button onClick = {()=> this.setState({count: this.state.count +1})}>Update</button>
            </>
        )
    }
}
export default PureCompo