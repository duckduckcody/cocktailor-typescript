import { faCocktail, faLemon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { COLOURS } from "../COLOURS";

const Container = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  height: 42px;
  border-top: 1px solid ${COLOURS.Grey};
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
`;

const FooterButton = styled.div`
  height: 40px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  cursor: pointer;
  flex: 1 1 auto;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  flex: 1 1 auto;
`;

const FooterButtonText = styled.span`
  flex: 1 1 auto;
  font-size: 12px;
`;

interface Props {
  setSelectedTabId?: () => string;
}

export const Footer = (props: Props) => (
  <Container>
    <FooterButton>
      <StyledIcon icon={faLemon} />
      <FooterButtonText>Ingredients</FooterButtonText>
    </FooterButton>
    <FooterButton>
      <StyledIcon icon={faCocktail} />
      <FooterButtonText>Cocktails</FooterButtonText>
    </FooterButton>
  </Container>
);
