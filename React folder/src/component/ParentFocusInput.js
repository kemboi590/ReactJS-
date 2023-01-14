import React, { Component } from 'react'
import InputClass from './InputClass'

class ParentFocusInput extends Component {
     constructor(props) {
       super(props)
     
         this.componentRef = React.createRef()
         
    }
    clickHandler = () => {
        this.componentRef.current.focus()
    }
  render() {
    return (
        <div>
            <InputClass ref={this.componentRef}/> 
            <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}

export default ParentFocusInput