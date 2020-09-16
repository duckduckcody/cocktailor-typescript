import React from "react";
import styled from "styled-components";

interface Props {
  link: string;
  text: string;
  className?: string;
}

const Link = styled.a`
  border: none;
  color: inherit;
  text-decoration: underline;
`;

export const BaseLink = ({ link, text, className }: Props) => (
  <Link
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className={className}
  >
    {text}
  </Link>
);
