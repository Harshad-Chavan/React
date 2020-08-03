import React from 'react'

// function Greet(){
//     return(
//         <h1>Hello Harshad</h1>

//     );

// }

//arrow function es6
const Greet = (props) => { 
            console.log(props)
            return (<h1>Hello {props.name}</h1>); 
}

//import with exact same name
// export const Greet = () => <h1>Hello Harshad</h1>






export default Greet;