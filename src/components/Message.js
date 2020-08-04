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

    add() {
        this.setState(
             {
                message : 'Adding + 1',
                count : this.state.count + 1     

             }   

        );
    }

    subtract() {
        this.setState(
             {
                message : 'subtracting -1',
                count : this.state.count - 1     

             }   

        );
    }


    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <h1>{this.state.count}</h1> 
                <button onClick={() => this.changeMessage()}>subscribe</button>
                <button onClick={() => this.add()}>add</button>
                <button onClick={() => this.subtract()}>sutract</button>
            </div>
        );
    }
}

export default Message;