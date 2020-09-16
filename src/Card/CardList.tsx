import React, { useState } from "react";
import { Card } from "./Card";
import coke from "./coke.png";
import { BigBoyCard } from "./BigBoyCard";

export interface Ingredient {
  name: string;
  image: string;
}

const ingredients = [
  {
    id: 1,
    name: "Coke",
    image: coke,
  },
  {
    id: 2,
    name: "Coke v2",
    image: coke,
  },
];

export const CardList = () => {
  const [selectedIngredient, setSelectedIngredient] = useState<Ingredient>();

  const handleContainerClick = (ingredient: Ingredient) =>
    setSelectedIngredient(ingredient);

  const handleCloseClick = () => setSelectedIngredient(undefined);

  return (
    <>
      {ingredients.map((ingredient) => (
        <Card
          key={ingredient.name}
          ingredient={ingredient}
          onContainerClick={handleContainerClick}
        />
      ))}
      {selectedIngredient && (
        <BigBoyCard
          ingredient={selectedIngredient}
          onCloseClick={handleCloseClick}
        />
      )}
    </>
  );
};
