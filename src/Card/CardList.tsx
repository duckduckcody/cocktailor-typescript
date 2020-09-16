import React, { useState } from "react";
import { Card } from "./Card";
import coke from "./coke.png";
import { BigBoyCard } from "./BigBoyCard";
import { CSSTransition } from "react-transition-group";

export interface Ingredient {
  name: string;
  description: string;
  image: string;
}

const ingredients = [
  {
    name: "Coca Cola",
    description:
      "The most well known soda and arguably mixer packs acidity and caffeine",
    image: coke,
  },
  {
    name: "Coke v2",
    description: "something very cool",
    image: coke,
  },
];

export const CardList = () => {
  // maintain state for exit animation
  const [selectedIngredient, setSelectedIngredient] = useState<Ingredient>();
  const [showBigBoyCard, setShowBigBoyCard] = useState(false);

  const handleContainerClick = (ingredient: Ingredient) => {
    setSelectedIngredient(ingredient);
    setShowBigBoyCard(true);
  };

  const handleCloseClick = () => setShowBigBoyCard(false);

  return (
    <>
      {ingredients.map((ingredient) => (
        <Card
          key={ingredient.name}
          ingredient={ingredient}
          onContainerClick={handleContainerClick}
        />
      ))}
      <CSSTransition
        in={showBigBoyCard}
        timeout={500}
        unmountOnExit
        classNames="bigBoyCard"
      >
        <BigBoyCard
          ingredient={selectedIngredient}
          onCloseClick={handleCloseClick}
        />
      </CSSTransition>
    </>
  );
};
