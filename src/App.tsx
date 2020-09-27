import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { Footer } from "./common/Footer/Footer";
import { CardList } from "./Card/CardList";

export const App = () => {
  const [selectedTabId, setSelectedTabId] = useState<string>();
  const INGREDIENTS_TAB_ID = "ingredients";
  const COCKTAILS_TAB_ID = "cocktails";

  return (
    <>
      <CSSTransition
        in={selectedTabId === INGREDIENTS_TAB_ID}
        timeout={500}
        unmountOnExit
      >
        <CardList />
      </CSSTransition>
    </>
  );
};
