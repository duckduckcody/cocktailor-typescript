import React, { useState } from "react";
import { Footer } from "./common/Footer/Footer";
import { IngredientList } from "./Ingredients/IngredientList";

export const Cocktailor = () => {
  const INGREDIENT_TAB_ID = "ingredients";
  const COCKTAILS_TAB_ID = "cocktails";
  const [selectedTabId, setSelectedTabId] = useState<string>(INGREDIENT_TAB_ID);

  return (
    <>
      {selectedTabId === INGREDIENT_TAB_ID && <IngredientList />}
      {selectedTabId === COCKTAILS_TAB_ID && <div>Cocktails</div>}
      <Footer
        ingredientTabId={INGREDIENT_TAB_ID}
        cocktailTabId={COCKTAILS_TAB_ID}
        selectedTabId={selectedTabId}
        onTabClick={setSelectedTabId}
      />
    </>
  );
};
