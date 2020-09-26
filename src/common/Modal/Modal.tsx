import React, { ReactNode } from "react";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";

const Shade = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 8px;
  padding: 8px;
  text-align: center;
`;

interface Props {
  onCloseClick?: VoidFunction;
  children?: ReactNode;
  className?: string;
  showing: boolean;
}

export const Modal = (props: Props) => (
  <CSSTransition in={props.showing} timeout={500} unmountOnExit>
    <Shade>
      <CSSTransition
        in={props.showing}
        timeout={500}
        appear={true}
        unmountOnExit
      >
        <Container className={props.className}>{props.children}</Container>
      </CSSTransition>
    </Shade>
  </CSSTransition>
);
