import React, { PureComponent } from 'react'

class Form extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            username : '',
            description : '',
            topic : 'react',
        }
    }

    handleUsernameChange = (event) =>
    {
        this.setState({username:event.target.value})
    }

    handleDescriptionChange = (event) =>
    {
        this.setState({description:event.target.value})
    }

    handleTopicChange = (event) =>
    {
        this.setState({topic:event.target.value})
    }

    handleFormSubmit = (event) =>
    {
        alert(`${this.state.username} ${this.state.description} ${this.state.topic}`)
        event.preventDefault()
    }

    // simple steps to create a controlled component
    // 1) create the html tag
    // 2)assign the current state to the value prop
    // 3) create a onchange event handler
    // 
    render() {
        return (
            <div>
            <div><h3>Form</h3></div>
            <form onSubmit={this.handleFormSubmit}>
                <div>
                    <label>Username</label>
                    <input type='text' value={this.state.username} onChange={this.handleUsernameChange}></input>
                </div>
                <div>
                    <label>Description</label>
                    <textarea value={this.state.description} onChange={this.handleDescriptionChange}/>
                </div>
                <div>
                    <label>Topic</label>
                    <select value={this.state.topic} onChange={this.handleTopicChange}>
                        <option value="react">React</option>
                        <option value="andular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <button>Submit</button>
            </form>
            </div>
        )
    }
}

export default Form