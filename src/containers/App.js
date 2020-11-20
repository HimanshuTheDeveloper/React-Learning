import React, { Component } from 'react';
import './App.css';
import Person from '../components/persons/Person/person';
import styled from 'styled-components';

const StyledButton = styled.button`
background-color: ${props => props.alt ? 'red' : 'yellow'};
color :black;
font: inherit; 
border: 1px solid silver;
padding: 8px;
cursor : pointer;
&:hover{
    background-color: ${props => props.alt ? 'orange' : 'green'};
    color : black;

}
`;
class App extends Component {
  state = {
    persons: [
      { id: 'adqa',name: 'Nishant', age: 78 },
      { id: 'qdsf',name: 'Himanshu', age: 28 },
      { id: 'dqwd',name: 'Akash Tonk', age: 22 }

    ],
    otherState: 'Some Other Value',
    showPersons: false
    
  }
  switchNameHandler = (newName) => {
     this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Nishant', age: 78 },
        { name: 'Akash Tonk', age: 22 }

      ]
    })
  }
  
  
  
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
    
  }
  deletePersonsHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex , 1);
    this.setState({persons : persons});
  }
  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 78 },
        { name: 'Akash Tonk', age: 22 }
        
      ]
});
  
    
  }
  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <persons
            persons = {this.state.persons}
            clicked = {this.deletePersonsHandler}
            changed = {this.nameChangeHandler}
          /> 
          {this.state.persons.map((person , index) =>{
            return <Person
            click = { () =>this.deletePersonsHandler(index)}
            name = {person.name}
            age = {person.age}
            key = {person.id} />
      })}
      
        </div>

      )
      
    }
    let classes = [ 'red' , 'bold'].join(' ');

    return (
      <div className="App">
        <h1 className="App-title">I am Influencer.!</h1>
        <p className={classes}s>This is really working !</p>
        <StyledButton alt={this.state.showPersons} onClick={this.togglePersonsHandler}>Toggle Person
        </StyledButton>
    {persons}
    </div>
    )
  };
}
export default App;







