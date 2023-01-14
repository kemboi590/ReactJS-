import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        //this is the creation of a Ref using the createRef() method
        this.inputRef = React.createRef()
        
       
    } 
    componentDidMount() {
        //this is the keeping of focus of the current input
        this.inputRef.current.focus()
        console.log(this.inputRef)
        
    }
    clickHandler = () => {
        //we are accessing the value of the input value which is current
        alert(this.inputRef.current.value)
    }  
  render() {
    return (
        <div>
            {/* reff is a reserved attribute */}
            <input type="text" ref={this.inputRef} />
            <button onClick={this.clickHandler}>Click</button>
      </div>
    ) 
  }
}
// Refs in React
// to focus on an input field in react we use Refs

export default RefsDemo