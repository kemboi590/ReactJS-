import React, { Component } from 'react'

class InputClass extends Component {
     constructor(props) {
       super(props)
         this.inputRef = React.createRef()
         
        
    }
    
    focusInput() {
        this.inputRef.current.fucus()
    }
  render() {
    return (
        <div>
            <input type="text" ref={this.inputRef} />
        </div>
    )
  }
}

export default InputClass