import React from "react";
import styled from "styled-components";
import { Ingredient } from "./CardList";

const Container = styled.div`
  display: flex;
  font-family: "Martel Sans", sans-serif;
  color: #2b4b5a;
`;

const ImageContainer = styled.div`
  background-color: #5ae8dc;
  flex: 0 0 30%;
  height: 150px;
  display: flex;
  justify-content: center;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;
`;

const Image = styled.img`
  object-fit: contain;
  position: relative;
  top: 10px;
  transform: rotate(5deg);
`;

const TextContainer = styled.div`
  flex: 0 0 70%;
  margin: 0 0 0 8px;
  font-size: 18px;
  position: relative;
`;

const Title = styled.span`
  font-size: 18px;
  line-height: 18px;
  text-decoration: underline;
  cursor: pointer;
`;

interface Props {
  ingredient: Ingredient;
  onContainerClick?: (ingredient: Ingredient) => void;
}

export const Card = ({ ingredient, onContainerClick }: Props) => (
  <Container onClick={() => onContainerClick?.(ingredient)}>
    <ImageContainer>
      <Image src={ingredient.image} />
    </ImageContainer>
    <TextContainer>
      <Title>{ingredient.name}</Title>
    </TextContainer>
  </Container>
);
