import React , {Component} from 'react'
import { render } from 'react-dom'

class Message extends Component{

    constructor(){
        super()
        this.state = {
            message : 'Welcome this is from state',
            count : 1
        }

    }

    changeMessage() {
        this.setState(
             {
                message : 'Thank you for subscribing'     

             }   

        );
    }

    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>subscribe</button>
                
            </div>
        );
    }
}

export default Message;