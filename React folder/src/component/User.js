import React, { Component } from 'react'

class User extends Component {
  render() {
    return (
        <div>
            {this.props.render(true)}
      </div>
    )
  }
}

export default User
//Render props ...
//it is a term that refers to a technique for ..
// sharing code between react components using ..
//prop whose value is a function