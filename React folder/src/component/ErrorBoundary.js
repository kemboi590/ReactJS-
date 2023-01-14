import React, { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         hasError
      }
    }
    static getDerivedStateFromError(error) {
        return {
           hasError: true
       }  
    }
  render() {
    return (
      <div>ErrorBoundary</div>
    ) 
  }
}

export default ErrorBoundary
