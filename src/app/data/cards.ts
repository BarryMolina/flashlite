import "server-only";
import { promises as fs } from "fs";
import { deckListSchema } from "./schema";

export async function getData() {
  const file = await fs.readFile(
    process.cwd() + "/src/app/data/cards.json",
    "utf8"
  );
  const data = JSON.parse(file);
  const decks = deckListSchema.parse(data);
  console.log("decks", decks);
  return decks;
}

/**
 * Return a list of decks for the current user
 * Does not include all cards
 */
export async function getDecks() {
  const decks = await getData();
  return decks.map((deck) => {
    return {
      id: deck.id,
      name: deck.name,
    };
  });
}

export async function getDeck(id: number) {
  const decks = await getData();
  const deck = decks.find((d) => d.id === id);
  if (deck !== undefined) {
    return {
      id: deck.id,
      name: deck.name,
      cards: deck.cards.map((card) => {
        return {
          description: card.description,
          definition: card.definition,
        };
      }),
    };
  }
  return undefined;
}