import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { Cocktailor } from "./Cocktailor";

const AppContainer = styled.div`
  height: 100%;
  width: 100%;
  color: #051e2a;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  *,
  *:before,
  *:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <AppContainer>
      <Cocktailor />
    </AppContainer>
  </React.StrictMode>,
  document.getElementById("root")
);
