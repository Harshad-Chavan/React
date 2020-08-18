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
            id:3,
            name: "Suresh",
            role:"sysadmin",
        },
            
    ]

//key is important makes it more efficient
const getperson = personlist.map( person => <Person key={person.id} person={person}></Person> )
    
    return (
        <div>
            { getperson }
        </div>
    )
}

let names = ['Bruce','clarke','diana']
export default PersonList
