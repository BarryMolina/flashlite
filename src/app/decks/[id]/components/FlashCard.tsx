"use client";
import { Card } from "@/app/data/types";

export function FlashCard(props: {
  card: Card;
  flipped: boolean;
  toggleFlipped: () => void;
}) {
  return (
    <button onClick={props.toggleFlipped}>
      <div className="w-[500px] min-h-[300px] p-10 border flex items-center justify-center drop-shadow-md bg-white">
        <h3 className="text-lg">
          {props.flipped ? props.card.back : props.card.front}
        </h3>
      </div>
    </button>
  );
}
