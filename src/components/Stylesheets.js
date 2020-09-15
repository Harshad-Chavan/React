import React from 'react'
import PropTypes from 'prop-types'
import './mystyle.css'


// stuling using css stylesheets
// we can pass props from the component and based on the value for the prop we can set the style
function Stylesheets(props) {
    const {} = props
    let className = props.primary ? 'primary font-xl' : ''
    return (
        <div>
            <h1 className={className}>Stylesheets</h1>
        </div>
    )
}

Stylesheets.propTypes = {

}

export default Stylesheets;
