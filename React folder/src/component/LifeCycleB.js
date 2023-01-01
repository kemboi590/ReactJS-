import React, { Component } from 'react'

class LifeCycleB extends Component {
     constructor(props) {
       super(props)
      
       this.state = {
          name: 'Kemboi'
         }
         console.log('LifeCycleB Constructor')
    }
    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleB  getDerivedStateFromProps' )
        return null
    } 
    componentDidMount() {
        console.log ('LifeCycleB ComponentDidMount')
  }
  shouldComponentUpdate() {
    console.log('LifeCyleB  shouldComponentUpdate ')
    return true
}
getSnapshotBeforeUpdate(prevProps, prevState) {
  console.log('LifeCyleB getSnapShotBeforeUpdate')
  return null
}
componentDidUpdate() {
    console.log('LifeCycleB componentDidUpdate')
}
    render() {
      console.log('LifeCycleB render')
    return <div>LifeCycle B </div>
    }
    
}

export default LifeCycleB
