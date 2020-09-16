import React from "react";
import { BaseLink } from "./ThirdPartyLink";

const nameToLink = (name: string) =>
  "https://www.wikipedia.org/wiki/" + name.toLowerCase().split(" ").join("_");

interface Props {
  ingredientName: string;
  className?: string;
}

export const WikipediaLink = ({ ingredientName, className }: Props) => (
  <BaseLink
    className={className}
    link={nameToLink(ingredientName)}
    text={"Wikipedia"}
  />
);
