import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { CardList } from './Card/CardList';
import styled from 'styled-components';
import { Footer } from './common/Footer/Footer';

const RootContainer = styled.div`
  height: 100vh;
  width: 100vw;
`

ReactDOM.render(
  <React.StrictMode>
    <RootContainer>
      <Footer />
      <CardList />
    </RootContainer>
  </React.StrictMode>,
  document.getElementById('root')
);
