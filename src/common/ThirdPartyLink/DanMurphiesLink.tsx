import React from "react";
import { BaseLink } from "./ThirdPartyLink";

const nameToLink = (name: string) =>
  `https://www.danmurphys.com.au/search?searchTerm=${name}`;

interface Props {
  ingredientName: string;
  className?: string;
}

export const DanMurphiesLink = ({ ingredientName, className }: Props) => (
  <BaseLink
    link={nameToLink(ingredientName)}
    text={"Dan Murphy's"}
    className={className}
  />
);
