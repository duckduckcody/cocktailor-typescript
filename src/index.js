import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { CardList } from './Card/CardList';
import styled from 'styled-components';

const RootContainer = styled.div`
  height: 100vh;
  width: 100vw;
`

ReactDOM.render(
  <React.StrictMode>
    <RootContainer>
      <CardList />
    </RootContainer>
  </React.StrictMode>,
  document.getElementById('root')
);
