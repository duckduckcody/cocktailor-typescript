import React from "react";
import { Ingredient } from "../IngredientList";
import {
  Container,
  ImageContainer,
  Image,
  InformationContainer,
  TextContainer,
  HeaderContainer,
  CloseCross,
  ButtonContainer,
  StyledButton,
  Name,
} from "./IngredientCard.styles";

interface Props {
  ingredient: Ingredient;
  onContainerClick?: (ingredient: Ingredient) => void;
  className?: string;
  onCloseClick?: VoidFunction;
}

export const IngredientCard = ({
  ingredient,
  onContainerClick,
  onCloseClick,
  className,
}: Props) => (
  <Container className={className}>
    <ImageContainer onClick={() => onContainerClick?.(ingredient)}>
      <Image src={ingredient.image} />
    </ImageContainer>
    <InformationContainer>
      <TextContainer>
        <HeaderContainer>
          <span>{ingredient.label}</span>
          <CloseCross onClick={() => onCloseClick?.()}>X</CloseCross>
        </HeaderContainer>
        <Name>{ingredient.name}</Name>
      </TextContainer>
      <ButtonContainer>
        <StyledButton onClick={() => onContainerClick?.(ingredient)}>
          View ingredient
        </StyledButton>
      </ButtonContainer>
    </InformationContainer>
  </Container>
);
