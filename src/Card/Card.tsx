import React from "react";
import styled from "styled-components";
import { Button } from "../common/Button/Button";
import { Ingredient } from "./CardList";
import { COLOURS } from "../common/COLOURS";

const Container = styled.div`
  display: flex;
  font-family: "Martel Sans", sans-serif;
  color: ${COLOURS.TextBlack};
  position: relative;
`;

const ImageContainer = styled.div`
  background-color: ${COLOURS.Blue};
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

const StyledButton = styled(Button)`
  background-color: ${COLOURS.Blue};

  &:active {
    background-color: ${COLOURS.DarkBlue};
  }
`;

const CloseCross = styled.span`
  cursor: pointer;
`;

interface Props {
  ingredient: Ingredient;
  onContainerClick?: (ingredient: Ingredient) => void;
  className?: string;
  onCloseClick?: VoidFunction;
}

export const Card = ({
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
