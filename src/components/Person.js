import React from 'react'

function Person({person}) {
    return (
        <div>
            <div><h1>{person.name} is a {person.role}</h1></div>
        </div>
    )
}

export default Person
