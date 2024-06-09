"use client";
import { Card } from "@/app/data/types";
import { useEffect, useState } from "react";
import { FlashCard } from "./FlashCard";
import { CardPagination } from "./CardPagination";
import { IconButton } from "./IconButton";
import FlipIcon from "@/app/assets/icons/flip.svg";
import ShuffleIcon from "@/app/assets/icons/shuffle.svg";
import PrevIcon from "@/app/assets/icons/prev.svg";
import NextIcon from "@/app/assets/icons/next.svg";
import { shuffle } from "../lib/shuffle";

export function CardSwitcher(props: { cards: Card[] }) {
  const numCards = props.cards.length;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [shouldFlip, setShouldFlip] = useState(false);
  const [shouldShuffle, setShouldShuffle] = useState(false);
  const [cards, setCards] = useState(props.cards);
  const [flippedCards, setFlippedCards] = useState(
    Array<boolean>(numCards).fill(false)
  );

  useEffect(() => {
    if (shouldShuffle) {
      setCards(shuffle(cards));
    } else {
      setCards(props.cards);
    }
  }, [shouldShuffle]);

  useEffect(() => {
    setFlippedCards(Array(numCards).fill(!shouldFlip));
  }, [shouldFlip]);

  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="flex justify-between w-[500px]">
        <IconButton
          active={shouldFlip}
          onClick={() => setShouldFlip(!shouldFlip)}
        >
          <FlipIcon />
        </IconButton>
        <CardPagination currentPage={selectedIndex + 1} totalPages={numCards} />
        <IconButton
          active={shouldShuffle}
          onClick={() => setShouldShuffle(!shouldShuffle)}
        >
          <ShuffleIcon />
        </IconButton>
      </div>
      <div className="flex justify-center items-center gap-10">
        <IconButton
          onClick={() =>
            setSelectedIndex(
              selectedIndex > 0 ? selectedIndex - 1 : numCards - 1
            )
          }
        >
          <PrevIcon />
        </IconButton>
        <FlashCard
          flipped={flippedCards[selectedIndex]}
          toggleFlipped={() => {
            const newCards = [...flippedCards];
            newCards[selectedIndex] = !flippedCards[selectedIndex];
            setFlippedCards(newCards);
          }}
          key={cards[selectedIndex].definition}
          card={cards[selectedIndex]}
        />
        <IconButton
          onClick={() =>
            setSelectedIndex(
              selectedIndex < numCards - 1 ? selectedIndex + 1 : 0
            )
          }
        >
          <NextIcon />
        </IconButton>
      </div>
    </div>
  );
}
