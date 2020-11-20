import React , {Component} from 'react';
import Person from './person/person';

class Persons extends Component{
    static getDerivedStateFromProps(props,state){
        console.log('[Persons.js] getDerivedStateFromStates');
        return state;
    }

    shouldComponentUpdate(nextProps , nextState){
        console.log('[Persons.js] shouldComponentUpdate');
        return true;
    }
    getSnapshotBeforeUpdate(prevProps , prevState){
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return {message : 'Snapshot !'};
    }
    componentDidUpdate(prevProps , prevState , snapshot){
        console.log('[Persons.js] componentsDidUpdate..');
        console.log(snapshot);
    }
 
    render(){
    return <Person
    click = { () =>this.props.deletePersonsHandler(index)}
    name = {person.name}
    age = {person.age}
    key = {person.id}
    changed={(event) =>this.props.changed(event,person.id)} />
}
}
export default Persons;