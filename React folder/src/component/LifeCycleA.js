import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          name: 'Kemboi'
         }
         console.log('LifeCycleA Constructor')
    }
    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleA  getDerivedStateFromProps' )
        return null
    } 
    componentDidMount() {
        console.log ('LifeCycleA ComponentDidMount')
    }
    shouldComponentUpdate() {
        console.log('LifeCyleA  shouldComponentUpdate ')
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifeCyleA getSnapShotBeforeUpdate')
        return null
    }
    componentDidUpdate() {
        console.log('LifeCycleA componentDidUpdate')
    }
    changeState = () => {
        this.setState({
            name: 'Game changer'  
        })
    }

    render() {
        console.log('LifeCycleA render')
        return (
            <div>
                <div>LifeCycleA</div>
                <button onClick={this.changeState} >Change State</button>
                <LifeCycleB />
        </div>
    )
    }
    
}

export default LifeCycleA
//This are Mounting lifeCyle methods of Components and this is the order.
//LifeCycleA Constructor
//LifeCycleA  getDerivedStateFromProps
//LifeCycleA render
//LifeCycleB Constructor
//LifeCycleB  getDerivedStateFromProps
//LifeCycleB render
//LifeCycleB ComponentDidMount
//LifeCycleA ComponentDidMount

//This are Updating lifeCyle methods of Components and this is the order.
//LifeCycleA  getDerivedStateFromProps
//  LifeCycleA  getDerivedStateFromProps
//  LifeCyleA  shouldComponentUpdate 

//  LifeCycleA render

// LifeCycleB  getDerivedStateFromProps

//  LifeCyleB  shouldComponentUpdate 

//  LifeCycleB render 

//  LifeCyleB getSnapShotBeforeUpdate

//  LifeCycleB componentDidUpdate
//  LifeCycleA componentDidUpdate
