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
  const [cards, setCards] = useState(props.cards);
  const [flippedCards, setFlippedCards] = useState(
    Array<boolean>(numCards).fill(false)
  );
  const [shuffleKey, setShuffleKey] = useState(Date.now());
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    setFlippedCards(Array(numCards).fill(shouldFlip));
  }, [shouldFlip]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key;
      (document.activeElement as HTMLElement).blur();
      if (key === "ArrowLeft") {
        prev();
      } else if (key === "ArrowRight") {
        next();
      } else if (key === " ") {
        toggleFlipped(selectedIndex);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  function prev() {
    setSelectedIndex(selectedIndex > 0 ? selectedIndex - 1 : numCards - 1);
  }

  function next() {
    setSelectedIndex(selectedIndex < numCards - 1 ? selectedIndex + 1 : 0);
  }

  function toggleFlipped(index: number) {
    const newCards = [...flippedCards];
    newCards[index] = !flippedCards[index];
    setFlippedCards(newCards);
  }

  function restart() {
    setSelectedIndex(0);
  }

  function shuffleCards() {
    setCards(shuffle(cards));
    if (!shouldAnimate) setShouldAnimate(true);
    setShuffleKey(Date.now());
  }

  return (
    <div className="flex flex-col gap-4 max-w-[500px] w-full">
      <div className="flex justify-between items-center">
        <IconButton onClick={restart}>
          <FlipIcon />
        </IconButton>
        <CardPagination currentPage={selectedIndex + 1} totalPages={numCards} />
        <IconButton onClick={shuffleCards}>
          <ShuffleIcon />
        </IconButton>
      </div>
      <div className={shouldAnimate ? "animate-shake" : ""} key={shuffleKey}>
        <FlashCard
          flipped={flippedCards[selectedIndex]}
          toggleFlipped={() => toggleFlipped(selectedIndex)}
          key={selectedIndex}
          card={cards[selectedIndex]}
        />
      </div>
      <div className="flex justify-center gap-8">
        <IconButton onClick={prev}>
          <PrevIcon />
        </IconButton>
        <IconButton onClick={next}>
          <NextIcon />
        </IconButton>
      </div>
    </div>
  );
}
