// import React, { useState } from 'react';
import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/person';
// import Radium, {StyleRoot} from 'radium';
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
    
    // console.log('Was Clicked !!');
    // Dont Do this use set State
    // this.state.persons[0].name = ' Himanshu Singh Rajpoot';
    
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
    
    // const style = {
  
    // };
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person , index) =>{
            return <Person
            click = { () =>this.deletePersonsHandler(index)}
            name = {person.name}
            age = {person.age}
            key = {person.id} />
      })}
          {/* <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />
          <Person name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Max!')}
            changed={this.changeNameHandler}>My Hobbies : Racing
          </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age} /> */}
        </div>

      )
      //   style.backgroundColor = 'red';
      //   style[':hover'] = {
      //     backgroundColor: 'orange',
      //     color : 'black'
      // }
    }
    let classes = [ 'red' , 'bold'].join(' ');

    return (
      // <StyleRoot>
      <div className="App">
        <h1 className="App-title">I am Influencer.!</h1>
        <p className={classes}s>This is really working !</p>
        <StyledButton alt={this.state.showPersons} onClick={this.togglePersonsHandler}>Toggle Person
        </StyledButton>

        {/* { this.state.showPersons === true ?  */}

        {/* : null */}
        {/* } */}
      {persons}

      </div>
      // </StyleRoot>
    )
  };
}
export default App;

// return React.createElement('div' , {className:'app'} , React.createElement('h1' ,null , 'Yes it is Heading 1'));

// class App extends Component {
//   state = {
//     persons: [
//       { name: 'Himanshu', age: 28 },
//       { name: 'Nishant', age: 78 },
//       { name: 'Akash Tonk', age: 22 }

//     ],
//     otherState: 'Some Other Value'
//   }
  // switchNameHandler = () => {
  //   // console.log('Was Clicked !!');
  //   // Dont Do this use set State
  //   // this.state.persons[0].name = ' Himanshu Singh Rajpoot';
  //   this.setState({
  //     persons: [
  //       { name: 'Himanshu Singh Rajpoot', age: 28 },
  //       { name: 'Nishant', age: 78 },
  //       { name: 'Akash Tonk', age: 22 }

  //     ]


  //   })
  // }

// }





// <div className="App">

//   <h1 className="App-title">I am Influencer.!</h1>
//   <p>This is really working !</p>
//   <button 
//   style={style}
//   onClick={() => this.switchNameHandler('Himanshu Thakur')}>Switch Name</button>

// <div>
// <Person
//   name={this.State.persons[0].name}
//   age={this.State.persons[0].age}>
// </Person>

// <Person name={this.State.persons[1].name}
//   age={this.State.persons[1].age}
//   click={this.switchNameHandler('Max!')}
//   changed={this.changeNameHandler}>My Hobbies : Racing
// </Person>
// <Person
//   name={this.State.persons[2].name}
//   age={this.State.persons[2].age}>
// </Person>
// </div>


// </div>
// );
// }


// export default App;