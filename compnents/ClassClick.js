import React, { Component } from "react";

class ClassClick extends Component {
    clickHandler() {
        console.log ("clcked the button")
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler} >Click me</button>
            </div>
        )
    }
}
export default ClassClick

//event handling on class component
