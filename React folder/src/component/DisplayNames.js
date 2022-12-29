import React from 'react'

function DisplayNames() {
    let arrayNames = ['Brian', 'Joy', 'Job', 'Andela']
    let Names = arrayNames.map((name, index) => <h2 key={index}> {index }{name}</h2>)
  return <div>{ Names}</div>
 
}

export default DisplayNames