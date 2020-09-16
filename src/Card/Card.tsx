import React from "react";
import styled from "styled-components";
import { Ingredient } from "./CardList";

const Container = styled.div`
  display: flex;
  font-family: "Martel Sans", sans-serif;
  color: #2b4b5a;
  position: relative;
`;

const ImageContainer = styled.div`
  background-color: #5ae8dc;
  flex: 0 0 30%;
  height: 125px;
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

const InformationContainer = styled.div`
  flex: 0 0 70%;
  padding: 0 16px;
  font-size: 18px;
  position: relative;
  display: flex;
  flex-flow: column nowrap;
`;

const TextContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex: 1 1 auto;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex: 0 0 auto;
`;

const HeaderContainer = styled.span`
  font-size: 14px;
  line-height: 21px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;

const Name = styled.span`
  font-size: 18px;
  line-height: 27px;
`;

const ViewButton = styled.button`
  color: white;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  height: 28px;
  background-color: #5ae8dc;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  flex: 1 1 auto;

  &:active {
    background-color: #49bfb5;
  }
`;

interface Props {
  ingredient: Ingredient;
  onContainerClick?: (ingredient: Ingredient) => void;
  className?: string;
}

export const Card = ({ ingredient, onContainerClick, className }: Props) => (
  <Container className={className}>
    <ImageContainer onClick={() => onContainerClick?.(ingredient)}>
      <Image src={ingredient.image} />
    </ImageContainer>
    <InformationContainer>
      <TextContainer>
        <HeaderContainer>
          <span>{ingredient.label}</span>
          <span>X</span>
        </HeaderContainer>
        <Name>{ingredient.name}</Name>
      </TextContainer>
      <ButtonContainer>
        <ViewButton onClick={() => onContainerClick?.(ingredient)}>
          View ingredient
        </ViewButton>
      </ButtonContainer>
    </InformationContainer>
  </Container>
);
