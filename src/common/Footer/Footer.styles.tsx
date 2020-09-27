import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { COLOURS } from "../COLOURS";

export const Container = styled.div<{ optionalHeight?: string }>`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  height: 50px;
  height: ${(props) =>
    props.optionalHeight ? `${props.optionalHeight}` : "50px"};
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  background-color: white;
`;

export const FooterButton = styled.div<{ selected?: boolean }>`
  height: 40px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  cursor: pointer;
  flex: 1 1 auto;
  color: ${(props) => (props.selected ? `${COLOURS.DarkBlue}` : "black")};
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  flex: 1 1 auto;
`;

export const FooterButtonText = styled.span`
  flex: 1 1 auto;
  font-size: 12px;
`;
