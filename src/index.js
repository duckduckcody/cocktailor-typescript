import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { IngredientList } from "./Ingredients/IngredientList";
import { Footer } from "./common/Footer/Footer";

const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
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
    -webkit-box-sizing: inherit;
    -moz-box-sizing: inherit;
    box-sizing: inherit;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <AppContainer>
      <Footer />
      <IngredientList />
    </AppContainer>
  </React.StrictMode>,
  document.getElementById("root")
);
