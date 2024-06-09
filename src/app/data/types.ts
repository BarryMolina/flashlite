export interface Card {
  id: number;
  description: string;
  definition: string;
}

export interface Deck {
  id: number;
  name: string;
  cards?: Card[];
}
