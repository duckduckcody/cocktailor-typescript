import styled from "styled-components";
import { Button } from "../../common/Button/Button";
import { COLOURS } from "../../common/COLOURS";

export const Container = styled.div`
  display: flex;
  font-family: "Martel Sans", sans-serif;
  color: ${COLOURS.TextBlack};
  position: relative;
`;

export const ImageContainer = styled.div`
  background-color: ${COLOURS.Blue};
  flex: 0 0 30%;
  height: 125px;
  display: flex;
  justify-content: center;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;
`;

export const Image = styled.img`
  object-fit: contain;
  position: relative;
  top: 10px;
  transform: rotate(5deg);
`;

export const InformationContainer = styled.div`
  flex: 0 0 70%;
  padding: 0 16px;
  font-size: 18px;
  position: relative;
  display: flex;
  flex-flow: column nowrap;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex: 1 1 auto;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex: 0 0 auto;
`;

export const HeaderContainer = styled.span`
  font-size: 14px;
  line-height: 21px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;

export const Name = styled.span`
  font-size: 18px;
  line-height: 27px;
`;

export const StyledButton = styled(Button)`
  background-color: ${COLOURS.Blue};

  &:active {
    background-color: ${COLOURS.DarkBlue};
  }
`;

export const CloseCross = styled.span`
  cursor: pointer;
`;
