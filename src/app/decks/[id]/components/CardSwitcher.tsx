"use client";
import { Card } from "@/app/data/types";
import { useState } from "react";
import { FlashCard } from "./FlashCard";
import { SwitcherControl } from "./SwitcherControl";

export function CardSwitcher({ cards }: { cards: Card[] }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="flex justify-center items-center gap-10">
      <SwitcherControl direction="back" />
      <FlashCard card={cards[selectedIndex]} />
      <SwitcherControl direction="forward" />
    </div>
  );
}
