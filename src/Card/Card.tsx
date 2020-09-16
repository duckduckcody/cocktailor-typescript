import React from "react";
import styled from "styled-components";

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

interface Props {
  id: number;
  name: string;
  image: string;
  onContainerClick?: (id: number) => void;
}

export const Card = ({ id, name, image, onContainerClick }: Props) => (
  <Container onClick={() => onContainerClick?.(id)}>
    <ImageContainer>
      <Image src={image} />
    </ImageContainer>
    <TextContainer>{name}</TextContainer>
  </Container>
);
