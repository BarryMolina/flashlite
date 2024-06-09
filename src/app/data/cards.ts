import "server-only";
import { deckListSchema } from "./schema";
import { Deck } from "./types";
import data from "./cards.json";

export async function getData() {
  const decks = deckListSchema.parse(data);
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

export async function getDeck(id: number): Promise<Deck | undefined> {
  const decks = await getData();
  const deck = decks.find((d) => d.id === id);
  if (deck !== undefined) {
    return {
      id: deck.id,
      name: deck.name,
      cards: deck.cards.map((card) => {
        return {
          id: card.id,
          front: card.front,
          back: card.back,
        };
      }),
    };
  }
  return undefined;
}
