import Link from "next/link";
import { getDecks } from "../data/cards";

export default async function DecksList() {
  const decks = await getDecks();

  return (
    <ul>
      {decks.map((deck) => (
        <li key={deck.id}>
          <Link href={`/decks/${deck.id}`}>{deck.name}</Link>
        </li>
      ))}
    </ul>
  );
}
