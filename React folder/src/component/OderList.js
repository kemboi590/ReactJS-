import React from 'react'
import Person from './Person'

function OderList() {
    const persons = [
        {
            id: 1,
            name: 'Brian',
            age: 25,
            skill: 'React'
        },

        {
            id: 2,
            name: 'Kevin',
            age: 35,
            skill: 'Angular'
        },

        {
            id: 3,
            name: 'Joan',
            age: 20,
            skill: 'Vue'
        } 
    ] 
    const personList = persons.map(person => <Person key={person.id} person={person}></Person>)
    return <div> {personList }</div>
  
}

export default OderList
//this is the parent component and link to the child Person.js
//responsible for rendering the list
