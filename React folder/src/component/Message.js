import React, { Component } from 'react'
class Message extends Component {
    constructor() {
        super()
        this.state = {
            message: 'Welcome Visitor'
        }
    }
  
    render() {
    return (
            <div>
            <h1>{this.state.message} </h1>
            <button onClick={ () => this.changeMessage()} >Subscribe</button>
            </div>           
    )
    }
    changeMessage () {
        this.setState({
           message: 'Thank you for subscribing'
        })
    }
}
export default Message
//State in React 
