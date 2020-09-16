import React, { useState } from "react";
import { Card } from "./Card";
import coke from "./coke.png";
import { BigBoyCard } from "./BigBoyCard";

const cards = [
  {
    id: 1,
    name: "Coke",
    image: coke,
  },
  {
    id: 2,
    name: "Coke v2",
    image: coke,
  },
];

export const CardList = () => {
  const [selectedCardId, setSelectedCardId] = useState<number | undefined>(
    undefined
  );
  const handleContainerClick = (id: number) => setSelectedCardId(id);
  return (
    <>
      {cards.map((card) => (
        <Card
          id={card.id}
          name={card.name}
          image={card.image}
          key={card.id}
          onContainerClick={handleContainerClick}
        />
      ))}
      {selectedCardId && <BigBoyCard />}
    </>
  );
};
