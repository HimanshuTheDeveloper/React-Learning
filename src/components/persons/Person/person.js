import React , {Component} from 'react';
import Radium from 'radium';
// import './person.css';
import styled from 'styled-components';
const StyledDiv = styled.div`
    
        width:60%;
        border : 1px solid grey;
        padding: 16px;
        margin:16px auto;
        box-shadow:0px 2px 3px silver;
        text-align:center; 
        
        '@media (min-width : 500px)'{
         width: '450px';
        }
  `;
class person extends Component{
    render(){
        console.log('[Person.js] renderring...')
        return(  
        <StyledDiv>
            <p onClick={this.props.click}>I am {this.props.name} !!! and I am {this.props.age}years Old!!</p>
            <p>{this.props.children}</p>
            <input type="text" onChange={this.props.changed} value={this.props.name}></input>
        </StyledDiv>
    )
}
}

export default Radium(person);