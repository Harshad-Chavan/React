import React from 'react'
import PropTypes from 'prop-types'

// to apply inlne stylinh in react we need to create a onject
// this object will have property name in camel case form
// pass this object to the stle property of the html tag

const mystyle = {

    fontSize:'72px',
    color : 'blue'

}

function Inlinestyle(props) {
    const {} = props

    return (
        <div>
            <h1 style={mystyle}>Inline Style</h1>
        </div>
    )
}

Inlinestyle.propTypes = {

}

export default Inlinestyle
