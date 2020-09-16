import React from "react";
import styled from "styled-components";
import coke from "./coke.png";

const Container = styled.div`
  flex-flow: column nowrap;
`;

const ImageContainer = styled.div`
  background-color: #5ae8dc;
  height: 150px;
  display: flex;
  justify-content: center;
  overflow: hidden;
  border-radius: 8px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

const Image = styled.img`
  object-fit: contain;
  position: relative;
  top: 10px;
  transform: rotate(5deg);
`;

const Buffer = styled.div`
  height: 75px;
`;

const Info = styled.div`
  height: 1000px;
  background-color: white;
`;

const ScrollingContainer = styled.div`
  height: 400px;
  position: relative;
  top: 75px;
  overflow-y: scroll;
`;

export const BigBoyCard = () => (
  <Container>
    <ImageContainer>
      <Image src={coke}></Image>
    </ImageContainer>
    <ScrollingContainer>
      <Buffer></Buffer>
      <Info>
        Ingredients juice of 1 lime 1 tsp granulated sugar small handful mint
        leaves, plus extra sprig to serve 60ml white rum soda water, to taste
        Method STEP 1 Muddle the lime juice, sugar and mint leaves in a small
        jug, crushing the mint as you go – you can use the end of a rolling pin
        for this. Pour into a tall glass and add a handful of ice. STEP 2 Pour
        over the rum, stirring with a long-handled spoon. Top up with soda
        water, garnish with mint and serve.
      </Info>
    </ScrollingContainer>
  </Container>
);
