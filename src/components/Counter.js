import React, { Component } from 'react'

class Counter extends Component {
    constructor(){
        super()
        this.state = {
                count : 1
        }

    }

    increment() {
        this.setState(
             {
               
                count : this.state.count + 1     

             },
             //call back funtion
             () => {console.log("calback funtion " + this.state.count)}

        );
        
    }

    decrement() {
        this.setState(
             {
               
                count : this.state.count - 1     

             }   

        );
        console.log(this.state.count)
    }

    render() {
        return (
            <div>
                <h1>Counter : {this.state.count}</h1> 
                <button onClick={() => this.increment()}>increment</button>
                <button onClick={() => this.decrement()}>decrement</button>
            </div>
        )
    }
}

export default Counter
