import React, { Component } from 'react'

class EventBinding extends Component {

    constructor(props) {
        super(props)
        this.state = {
             message : 'Hello'
        }

        // 2) bind the event in the contructor itself
        this.clickHandler = this.clickHandler.bind(this)
    }
    
    // 1) thiss will cause error as 'this' is not avaible in event handler we need to bind it but is not a good approach
    clickHandler() { this.setState({message:'Clicked button'})}




    render() {
        return (
            <div>
                <p>{this.state.message}</p>
                {/* <button onClick={this.clickHandler.bind(this)}>click</button> */}
                <button onClick={this.clickHandler}>click</button>  
            </div>
        )
    }
}

export default EventBinding;
