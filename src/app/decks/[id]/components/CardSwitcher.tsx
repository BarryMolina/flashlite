"use client";
import { Card } from "@/app/data/types";
import { useState } from "react";
import { FlashCard } from "./FlashCard";
import { CardPagination } from "./CardPagination";
import { IconButton } from "./IconButton";
import FlipIcon from "@/app/assets/icons/flip.svg";
import ShuffleIcon from "@/app/assets/icons/shuffle.svg";
import PrevIcon from "@/app/assets/icons/prev.svg";
import NextIcon from "@/app/assets/icons/next.svg";

export function CardSwitcher({ cards }: { cards: Card[] }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [shuffled, setShuffled] = useState(false);
  const [flippedCards, setFlippedCards] = useState(
    Array<boolean>(cards.length).fill(false)
  );

  function flipCards() {
    setFlipped(!flipped);
    setFlippedCards(Array(flippedCards.length).fill(!flipped));
  }

  function shuffleCards() {
    setShuffled(!shuffled);
  }

  function prevCard() {
    setSelectedIndex(selectedIndex > 0 ? selectedIndex - 1 : cards.length - 1);
  }

  function nextCard() {
    setSelectedIndex(selectedIndex < cards.length - 1 ? selectedIndex + 1 : 0);
  }

  function toggleFlipped(index: number) {
    const newCards = [...flippedCards];
    newCards[index] = !flippedCards[index];
    setFlippedCards(newCards);
  }

  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="flex justify-between w-[500px]">
        <IconButton active={flipped} onClick={flipCards}>
          <FlipIcon />
        </IconButton>
        <CardPagination
          currentPage={selectedIndex + 1}
          totalPages={cards.length}
        />
        <IconButton active={shuffled} onClick={shuffleCards}>
          <ShuffleIcon />
        </IconButton>
      </div>
      <div className="flex justify-center items-center gap-10">
        <IconButton onClick={prevCard}>
          <PrevIcon />
        </IconButton>
        <FlashCard
          flipped={flippedCards[selectedIndex]}
          toggleFlipped={() => toggleFlipped(selectedIndex)}
          key={cards[selectedIndex].definition}
          card={cards[selectedIndex]}
        />
        <IconButton onClick={nextCard}>
          <NextIcon />
        </IconButton>
      </div>
    </div>
  );
}
