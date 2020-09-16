import React from "react";
import styled from "styled-components";
import { ingredientToWikiLink } from "../helpers/ingredientToWikiLink";
import { Ingredient } from "./CardList";

const Container = styled.div`
  flex-flow: column nowrap;
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: lightgrey;
`;

const CloseButton = styled.button`
  position: fixed;
  top: 10px;
`;

const ImageContainer = styled.div`
  background-color: #5ae8dc;
  height: 150px;
  display: flex;
  justify-content: center;
  overflow: hidden;
  border-radius: 8px;
`;

const Image = styled.img`
  object-fit: contain;
  position: relative;
  top: 10px;
  transform: rotate(5deg);
`;

const ScrollingContainer = styled.div`
  overflow-y: scroll;
`;

export const BigBoyCard = ({
  ingredient,
  onCloseClick,
}: {
  ingredient: Ingredient;
  onCloseClick?: VoidFunction;
}) => (
  <Container>
    <ImageContainer>
      <Image src={ingredient.image}></Image>
    </ImageContainer>
    <CloseButton onClick={() => onCloseClick?.()}>Close</CloseButton>
    <ScrollingContainer>
      {ingredient.name}
      <a
        href={ingredientToWikiLink(ingredient.name)}
        target="_blank"
        rel="noopener noreferrer"
      >
        Wikipedia
      </a>
    </ScrollingContainer>
  </Container>
);
