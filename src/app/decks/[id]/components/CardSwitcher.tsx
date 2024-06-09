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
  const [flip, setFlip] = useState(false);
  const [shuffle, setShuffle] = useState(false);

  function prevCard() {
    setSelectedIndex(selectedIndex > 0 ? selectedIndex - 1 : cards.length - 1);
  }

  function nextCard() {
    setSelectedIndex(selectedIndex < cards.length - 1 ? selectedIndex + 1 : 0);
  }

  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="flex justify-between w-[500px]">
        <IconButton active={flip} onClick={() => setFlip(!flip)}>
          <FlipIcon />
        </IconButton>
        <CardPagination
          currentPage={selectedIndex + 1}
          totalPages={cards.length}
        />
        <IconButton active={shuffle} onClick={() => setShuffle(!shuffle)}>
          <ShuffleIcon />
        </IconButton>
      </div>
      <div className="flex justify-center items-center gap-10">
        <IconButton onClick={prevCard}>
          <PrevIcon />
        </IconButton>
        <FlashCard
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
