import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message : "Hello"
        }
        this.clickHandler = this.clickHandler.bind(this)
       
    }

    // clickHandler() {
    //     this.setState({
    //         message: "Goodbye"
    //     })
    //     console.log(this)
    // }
    
    clickHandler = () => {
        this.setState({
            message: 'Goodbye!!'
        })
    }
  render() {
      return (
        <div>
              <div>{this.state.message}</div>
             
              {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
              
              {/* <button onClick={() => this.clickHandler()}>Click</button> */}
              <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}
//binding eventHanders in react
// 1. binding in the render function : has perfomance implications
// 2. binding using arrow function in render : best when we don't have nested children
// 3. binding in the constructor
// 4. binding in a class property as arrow function

export default EventBind