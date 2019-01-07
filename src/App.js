import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: "John Doe", age: "25", "activity": "Hiking"},
      {name: "Jane Doe", age: "15", "activity": "Biking"}
    ]
  }
  changeActivityToKayakingHandler = (newActvity) => {
    //console.log('Was clicked!');
    this.setState({
      persons: [
        {name: "John Doe", age: "25", activity: newActvity},
        {name: "Jane Doe", age: "15", activity: newActvity}
      ]
    });
  }

  activityChangeHandler = (event) => {
    this.setState({
      persons: [
        {name: "John Doe", age: "25", activity: event.target.value},
        {name: "Jane Doe", age: "15", activity: event.target.value}
      ]
    });
  }



  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px'
    };
    return (
      <div className="App">
       <h1>Basic React App</h1>
       Pick an Activity: <input style = {style} type="text" onChange={this.activityChangeHandler} value={this.state.persons[0].activity}></input>
       {/*<button onClick={this.pickedActivityHandler}>Pick an Activity</button>*/}
       <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} 
          activity={this.state.persons[0].activity}
          click={this.changeActivityToKayakingHandler.bind(this,'Kayaking')}
          changed={this.activityChangeHandler}></Person>
       <Person 
          name={this.state.persons[1].name}  
          age={this.state.persons[1].age} 
          activity={this.state.persons[1].activity}
          click={this.changeActivityToKayakingHandler.bind(this,'Kayaking')}
          changed={this.activityChangeHandler}></Person>
      </div>
    );
  }
}

export default App;
