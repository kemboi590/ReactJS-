// rcc or rce
import React, { Component } from 'react'
class Counter extends Component {
    // rconst
    constructor(props) {
        super(props)

        this.state = {
            count: 0

        }
    }
    increment() {
        this.setState({
            count: this.state.count + 1
        },
            () => {
                console.log('callback value', this.state.count)
            }
        )
        console.log(this.state.count)
    }
    render() {
        return (
            <div>
                <div>  count - {this.state.count}  </div>
                <button onClick={() => this.increment()}>Increment</button>
            </div>
        )
    }
}
export default Counter
//setState in React