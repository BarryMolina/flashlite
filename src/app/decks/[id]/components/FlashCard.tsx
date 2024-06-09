"use client";
import { Card } from "@/app/data/types";

export function FlashCard(props: {
  card: Card;
  flipped: boolean;
  toggleFlipped: () => void;
}) {
  return (
    <button
      className="min-h-[300px] p-10 border flex items-center justify-center bg-white w-full shadow-md"
      onClick={props.toggleFlipped}
    >
      <h3 className="text-md sm:text-lg">
        {props.flipped ? props.card.back : props.card.front}
      </h3>
    </button>
  );
}
