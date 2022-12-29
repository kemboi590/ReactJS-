import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          parentName: "parent"
         }
         this.greatParent = this.greatParent.bind(this)
    }
    greatParent(childName) {
        alert (`Hello ${this.state.parentName } from ${childName}`)
    }
  render() {
    return (
        <div>
            <ChildComponent greatHandler = {this.greatParent} />
      </div>
    )
  }
}

export default ParentComponent