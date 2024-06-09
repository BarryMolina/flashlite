"use client";
import { Card } from "@/app/data/types";
import { useState } from "react";

export function FlashCard({ card }: { card: Card }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <button onClick={() => setFlipped(!flipped)}>
      <div className="w-[500px] min-h-[300px] p-10 border flex items-center justify-center drop-shadow-md bg-white">
        <h3 className="text-lg">
          {flipped ? card.definition : card.description}
        </h3>
      </div>
    </button>
  );
}
