import React from 'react';
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
const person = (props) => {
    // {Math.floor(Math.random()*30)} 
    // const style = {
    //     '@media (min-width : 500px)' : {
    //         width: '450px'
    //     }
    // }
    return(
        <StyledDiv>
    {/* <div className="user" style={style}> */}
        <p onClick={props.click}>I am {props.name} !!! and I am {props.age}years Old!!</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}></input>
    {/* </div> */}
    </StyledDiv>
    )
}

export default Radium(person);