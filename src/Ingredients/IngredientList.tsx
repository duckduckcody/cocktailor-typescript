import React, { useState } from "react";
import { IngredientCard } from "./IngredientCard/IngredientCard";
import { BigBoyCard } from "./IngredientDetailsModal/IngredientDetailsModal";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";
import { ConfirmModal } from "../common/Modal/ConfirmModal";
import Coke from "../assets/pictures/coke.png";

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
    image: Coke,
  },
  {
    name: "Coke v2",
    description: "something very cool",
    label: "Mixer",
    image: Coke,
  },
  {
    name: "Coke v2",
    description: "something very cool",
    label: "Mixer",
    image: Coke,
  },
  {
    name: "Coke v2",
    description: "something very cool",
    label: "Mixer",
    image: Coke,
  },
  {
    name: "Coke v2",
    description: "something very cool",
    label: "Mixer",
    image: Coke,
  },
  {
    name: "Coke v2",
    description: "something very cool",
    label: "Mixer",
    image: Coke,
  },
  {
    name: "Coke v2",
    description: "something very cool",
    label: "Mixer",
    image: Coke,
  },
  {
    name: "Coke v2",
    description: "something very cool",
    label: "Mixer",
    image: Coke,
  },
  {
    name: "Coke v2",
    description: "something very cool",
    label: "Mixer",
    image: Coke,
  },
];

const Container = styled.div`
  padding: 8px 8px 0;
`;

const StyledCard = styled(IngredientCard)`
  padding: 0 0 16px;

  &::last-child {
    margin: 0;
  }
`;

export const IngredientList = () => {
  // maintain state for exit animation
  const [selectedIngredient, setSelectedIngredient] = useState<Ingredient>();
  const [showBigBoyCard, setShowBigBoyCard] = useState(false);
  const [ingredientToRemove, setIngredientToRemove] = useState<Ingredient>();

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
          onCloseClick={() => setIngredientToRemove(ingredient)}
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

      <ConfirmModal
        showing={!!ingredientToRemove}
        confirmText={
          ingredientToRemove?.name && `Remove ${ingredientToRemove.name}?`
        }
        confirmButtonText={"Remove"}
        onConfirmClick={() => console.log("remove ingredient")}
        onCancelClick={() => setIngredientToRemove(undefined)}
      />
    </Container>
  );
};
