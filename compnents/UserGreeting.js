import React, { Component } from 'react'

class UserGreeting extends Component {
        constructor(props) {
          super(props)
        
          this.state = {
             isLoggedIn: true
          }
        }
    render() {
        //Short circuit operator condition rendering 
        //it only renders when the condition is true
        // return this.state.isLoggedIn && <div> Welcome Kemboi</div>




        // Ternary condition operator condition rendering
        // more simplier to use
        return (
            this.state.isLoggedIn ?
                <div> Welcome Kemboi</div> :
                <div> Welcome Guest</div>
        )





        //Element Variable condition rendering
        //the let message is element variable
    // let message
    //     if (this.state.isLoggedIn) {
    // message = <div> Welcome Kemboi </div>
    //     } else {
    //         message = <div> Welcome Guest</div>
    //     }
    //     return <div>{ message}</div>






// If else condition rendering
    //     if (this.state.isLoggedIn) {
    //         return (
    //             <div>
    //                 Welcome Kemboi
    //           </div>
    //       )
    //     } else {
    //         return (
    //             <div>
    //                 Welcome Guest
    //             </div>
    //         )
    //   }
        
        
        
   
  }
}

export default UserGreeting


//Short circuit operator condition rendering

//Ternary condition operator condition rendering

//Element Variable condition rendering

// If else condition rendering


