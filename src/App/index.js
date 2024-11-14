import React, { Component } from 'react';
import WelcomeMessage from './WelcomeMessage';
import './App.css';

import styled, {css} from 'styled-components';

const MyButton = styled.div`
  color: green;
  ${props => props.primary && css`
    color: palevioletred;
  `}
`;

const TomatoButton = styled(MyButton)`
  color: tomato;
  border-color: tomato;
`;

// const Button = styled.button`
//   background-color: ${props => props.primary ? 'blue' : 'gray'};
//   color: white;
//   padding: 10px 15px;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;

//   &:hover {
//     background-color: ${props => props.primary ? 'darkblue' : 'darkgray'};
//   }
// `;

class App extends Component {
  render() {
    return (
    <div>
      <WelcomeMessage/>
      <MyButton>Click me!</MyButton>
      <MyButton primary>Click me!</MyButton>
      <TomatoButton>Click me!</TomatoButton>
      {/* <Button primary>Primary</Button>
      <Button>Secondary</Button> */}
    </div>
    );
  }
}

export default App;
