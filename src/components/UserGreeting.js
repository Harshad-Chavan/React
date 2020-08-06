import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : true
        }
    }
    
    render() {

        // //Using if else approachh cannot be used inside JSX
        // if (this.state.isLoggedIn){
        //     return( <p>Welcome Harshad</p>)
        // }
        // else
        // {
        //     return( <p>Welcome guest</p>)     
        // }

        // //element variable approach cannot be used inside JSX
        // let message 
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome Harshad</div>
        // }
        // else {
        //     message = <div>Welcome Guest</div>

        // }
        // return (message)
        
        //ternery operator easy to use works in jsx
        return this.state.isLoggedIn ? <p>Welcome harshad</p> : <p>Welcome guest</p>
    }
}

export default UserGreeting
