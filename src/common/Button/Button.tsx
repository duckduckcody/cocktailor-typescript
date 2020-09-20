import React, { ReactNode } from "react";
import styled from "styled-components";

export const StyledButton = styled.button`
  color: white;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  height: 28px;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  flex: 1 1 auto;
`;

interface Props {
  children: ReactNode;
  className?: string;
  onClick?: VoidFunction;
}

export const Button = ({ children, className, onClick }: Props) => (
  <StyledButton onClick={() => onClick?.()} className={className}>
    {children}
  </StyledButton>
);
