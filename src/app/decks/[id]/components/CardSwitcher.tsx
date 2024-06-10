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
import { useWindowDimensions } from "../lib/useWindowDimensions";

export function CardSwitcher(props: { cards: Card[] }) {
  const numCards = props.cards.length;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [shouldFlip, setShouldFlip] = useState(false);
  const [cards, setCards] = useState(props.cards);
  const [flippedCards, setFlippedCards] = useState(
    Array<boolean>(numCards).fill(false)
  );
  const [animateShake, setAnimateShake] = useState(false);
  const [animateSlide, setAnimateSlide] = useState(false);
  const { width, height } = useWindowDimensions();
  const prevIndex = selectedIndex > 0 ? selectedIndex - 1 : numCards - 1;
  const nextIndex = selectedIndex < numCards - 1 ? selectedIndex + 1 : 0;

  useEffect(() => {
    // This useEffect avoids a server/client props mismatch error caused by `width` being unavailable on the server
    if (width > 0 && !animateSlide) setAnimateSlide(true);
  }, [width]);

  useEffect(() => {
    setFlippedCards(Array(numCards).fill(shouldFlip));
  }, [shouldFlip]);

  // todo, use a ref or something so that listener doesn't have to be added and removed every time
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
  }, [selectedIndex]);

  function prev() {
    setSelectedIndex(prevIndex);
  }

  function next() {
    setSelectedIndex(nextIndex);
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
    setAnimateShake(true);
  }

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex justify-center">
        <div className="flex justify-between items-center max-w-[500px] w-full ">
          <IconButton onClick={restart}>
            <FlipIcon />
          </IconButton>
          <CardPagination
            currentPage={selectedIndex + 1}
            totalPages={numCards}
          />
          <IconButton onClick={shuffleCards}>
            <ShuffleIcon />
          </IconButton>
        </div>
      </div>
      <div className="relative h-[300px]">
        <FlashCard
          position={-180}
          flipped={flippedCards[prevIndex]}
          key={prevIndex}
          card={cards[prevIndex]}
          animateShake={animateShake}
          animateSlide={animateSlide}
          onShakeEnd={() => setAnimateShake(false)}
          onClick={prev}
          zIndex={0}
        />
        <FlashCard
          position={width / 2}
          flipped={flippedCards[selectedIndex]}
          onClick={() => toggleFlipped(selectedIndex)}
          key={selectedIndex}
          card={cards[selectedIndex]}
          animateShake={animateShake}
          onShakeEnd={() => setAnimateShake(false)}
          animateSlide={animateSlide}
          zIndex={2}
        />
        <FlashCard
          position={width + 180}
          flipped={flippedCards[nextIndex]}
          key={nextIndex}
          card={cards[nextIndex]}
          animateShake={animateShake}
          onShakeEnd={() => setAnimateShake(false)}
          animateSlide={animateSlide}
          onClick={next}
          zIndex={1}
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
