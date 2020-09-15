import React from 'react'

// only use index as a list if three conditions are satisfied
// 1) list is static i.e no items will be added or deleted 
// 2) list will not be filtered or reorgnized
// 3) there is no unique id for the data

function Namelist(params) {
    const names = ['bruce','diana','clark','bruce']
    const namelist = names.map( (name,index) => <h2 key={index}>{index}{name}</h2>)

return(<div>{namelist}</div>)
}

export default Namelist;