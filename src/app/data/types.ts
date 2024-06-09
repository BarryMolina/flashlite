export interface Card {
  id?: number;
  front: string;
  back: string;
}

export interface Deck {
  id?: number;
  name: string;
  cards?: Card[];
}
