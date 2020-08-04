import React, { Component } from 'react'

class ClassClick extends Component {

    clickHandler() { console.log("clicke in class")}

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>click</button>
            </div>
        )
    }
}

export default ClassClick
