import { z } from "zod";

export const cardSchema = z.object({
  id: z.number().optional(),
  front: z.string(),
  back: z.string(),
});

export const deckSchema = z.object({
  id: z.number().optional(),
  name: z.string(),
  cards: z.array(cardSchema),
});

export const deckListSchema = z.array(deckSchema);
