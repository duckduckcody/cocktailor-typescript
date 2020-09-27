import { faCocktail, faLemon } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {
  Container,
  FooterButton,
  FooterButtonText,
  StyledIcon,
} from "./Footer.styles";

interface Props {
  ingredientTabId: string;
  cocktailTabId: string;
  onTabClick?: (tabId: string) => void;
  selectedTabId: string;
  height?: string;
}

export const Footer = (props: Props) => (
  <Container optionalHeight={props.height}>
    <FooterButton
      onClick={() => props.onTabClick?.(props.ingredientTabId)}
      selected={props.selectedTabId === props.ingredientTabId}
    >
      <StyledIcon icon={faLemon} />
      <FooterButtonText>Ingredients</FooterButtonText>
    </FooterButton>
    <FooterButton
      onClick={() => props.onTabClick?.(props.cocktailTabId)}
      selected={props.selectedTabId === props.cocktailTabId}
    >
      <StyledIcon icon={faCocktail} />
      <FooterButtonText>Cocktails</FooterButtonText>
    </FooterButton>
  </Container>
);
