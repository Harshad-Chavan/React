import React from 'react'
import Person from './Person'

function PersonList() {
    const names = ['Bruce','clarke','diana']
    const personlist = [
        {
            id:1,
            name: "Harshad",
            role:"Developer",
        },
        {
            id:2,
            name: "Ramesh",
            role:"Tester",
        },
        {
            id:1,
            name: "Suresh",
            role:"sysadmin",
        },
            
    ]

const getperson = personlist.map( person => <Person person={person}></Person> )
    
    return (
        <div>
            { getperson }
        </div>
    )
}

let names = ['Bruce','clarke','diana']
export default PersonList
