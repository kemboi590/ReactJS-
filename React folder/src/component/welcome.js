import React, { Component } from "react"

class Welcome extends Component {
    render() {
        const {name, jargonName} = this.props
        return <h1> welcome home {name} a.k.a {jargonName}</h1>
 }
}
export default Welcome
//this is a class component