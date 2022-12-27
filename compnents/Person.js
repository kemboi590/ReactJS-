import React from 'react'

function Person({person}) {
  return (
      <div>
          <h2>
 I am {person.name}, I am {person.age} years old. I know {person.skill}
        </h2>   
    </div>
  )
}

export default Person 

//this is the child component and linked to the parent OrderList.js
//used to render out html
