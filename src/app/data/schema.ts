import { z } from "zod";

export const cardSchema = z.object({
  id: z.number(),
  description: z.string(),
  definition: z.string(),
});

export const deckSchema = z.object({
  id: z.number(),
  name: z.string(),
  cards: z.array(cardSchema),
});

export const deckListSchema = z.array(deckSchema);
