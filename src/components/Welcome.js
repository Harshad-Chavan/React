import React , { Component } from 'react'
import { render } from 'react-dom'


class Welcome extends Component{
    render() {
        return(
          <h1>Welcome {this.props.name} !</h1>      

        );
}
}

export default Welcome;