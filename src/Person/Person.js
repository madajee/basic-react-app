import React from 'react';
import './Person.css';
const person = (props) =>  {
    return (
        <div className="Person">
            <p>I am a {props.name} and I am {props.age} years old !. Let's go for {props.activity} <button onClick={props.click}>Change Activity To Kayaking</button></p>
            <p>Pick an Activity: <input type="text" onChange={props.changed} value={props.activity}></input></p>
        </div>
    )
}
export default person;