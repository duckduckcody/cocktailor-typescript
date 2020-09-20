import React, { useState } from "react";
import { Card } from "./Card";
import coke from "./coke.png";
import { BigBoyCard } from "./BigBoyCard";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";
import { ConfirmModal } from "../common/Modal/ConfirmModal";

export interface Ingredient {
  name: string;
  description: string;
  label: string;
  image: string;
}

const ingredients = [
  {
    name: "Coca Cola",
    description:
      "The most well known soda and arguably mixer packs acidity and caffeine",
    label: "Mixer",
    image: coke,
  },
  {
    name: "Coke v2",
    description: "something very cool",
    label: "Mixer",
    image: coke,
  },
];

const Container = styled.div`
  padding: 8px;
`;

const StyledCard = styled(Card)`
  padding: 0 0 16px;

  &::last-child {
    margin: 0;
  }
`;

export const CardList = () => {
  // maintain state for exit animation
  const [selectedIngredient, setSelectedIngredient] = useState<Ingredient>();
  const [showBigBoyCard, setShowBigBoyCard] = useState(false);
  const [ingredientToDelete, setIngredientToDelete] = useState<Ingredient>();

  const handleContainerClick = (ingredient: Ingredient) => {
    setSelectedIngredient(ingredient);
    setShowBigBoyCard(true);
  };

  const handleCloseClick = () => setShowBigBoyCard(false);

  return (
    <Container>
      {ingredients.map((ingredient) => (
        <StyledCard
          key={ingredient.name}
          ingredient={ingredient}
          onContainerClick={handleContainerClick}
          onCloseClick={() => setIngredientToDelete(ingredient)}
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
      {ingredientToDelete && (
        <ConfirmModal
          confirmText={`Delete ${ingredientToDelete.name}?`}
          confirmButtonText={"delete"}
          onConfirmClick={() => console.log("delete ingredient")}
          onCancelClick={() => setIngredientToDelete(undefined)}
        />
      )}
    </Container>
  );
};
