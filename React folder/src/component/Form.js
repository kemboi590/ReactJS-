import React, { Component } from 'react'

class Form extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          userName: ''
       }
     }
  render() {
    return (
        <form>
            <div>
                <label>Username</label>
                <input type='text'value={this.state.userName} />
             </div>
     </form>
    )
  }
}

export default Form