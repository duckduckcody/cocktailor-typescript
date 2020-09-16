import React from "react";
import {
  Container,
  ImageContainer,
  Image,
  CloseButton,
  TextContainer,
  Title,
  Description,
  StyledWikipediaLink,
  StyledDanMurphiesLink,
} from "./BigBoyCard.styles";
import { Ingredient } from "./CardList";

interface Props {
  ingredient?: Ingredient;
  onCloseClick?: VoidFunction;
}

export const BigBoyCard = ({ ingredient, onCloseClick }: Props) => (
  <Container>
    <ImageContainer>
      <Image src={ingredient?.image}></Image>
    </ImageContainer>
    <CloseButton onClick={() => onCloseClick?.()}>X</CloseButton>
    <TextContainer>
      <Title>{ingredient?.name}</Title>
      <Description>{ingredient?.description}</Description>
      <StyledWikipediaLink ingredientName={ingredient?.name || ""} />
      <StyledDanMurphiesLink ingredientName={ingredient?.name || ""} />
    </TextContainer>
  </Container>
);
