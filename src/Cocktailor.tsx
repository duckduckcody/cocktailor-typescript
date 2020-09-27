import React, { useState } from "react";
import styled from "styled-components";
import { Footer } from "./common/Footer/Footer";
import { IngredientList } from "./Ingredients/IngredientList";

const FOOTER_HEIGHT = "50px";

const Container = styled.div`
  margin: 0 0 ${FOOTER_HEIGHT};
`;

export const Cocktailor = () => {
  const INGREDIENT_TAB_ID = "ingredients";
  const COCKTAILS_TAB_ID = "cocktails";
  const [selectedTabId, setSelectedTabId] = useState<string>(INGREDIENT_TAB_ID);

  return (
    <>
      <Container>
        {selectedTabId === INGREDIENT_TAB_ID && <IngredientList />}
        {selectedTabId === COCKTAILS_TAB_ID && <div>Cocktails</div>}
      </Container>
      <Footer
        ingredientTabId={INGREDIENT_TAB_ID}
        cocktailTabId={COCKTAILS_TAB_ID}
        selectedTabId={selectedTabId}
        onTabClick={setSelectedTabId}
      />
    </>
  );
};
