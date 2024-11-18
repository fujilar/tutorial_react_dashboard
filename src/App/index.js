import React, { Component } from 'react';
import './App.css';
import AppLayout from './AppLayout';
import AppBar from './AppBar';
import {AppProvider}  from './AppProvider';
import Settings from '../Settings';
import Content from '../Shared/Content';

// import styled, {css} from 'styled-components';

// const MyButton = styled.div`
//   color: green;
//   ${props => props.primary && css`
//     color: palevioletred;
//   `}
// `;

// const TomatoButton = styled(MyButton)`
//   color: tomato;
//   border-color: tomato;
// `;

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
    <AppLayout> 
      <AppProvider>
        <AppBar/>
        <Content>
          <Settings/>
        </Content>
      </AppProvider>
    </AppLayout>


    );
  }
}

export default App;
