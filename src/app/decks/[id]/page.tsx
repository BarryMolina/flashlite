import { getDeck } from "@/app/data/cards";
import { CardSwitcher } from "./components/CardSwitcher";

export default async function Page({ params }: { params: { id: string } }) {
  const deck = await getDeck(Number(params.id));

  return (
    <div className="flex flex-col items-center gap-20 py-20">
      <h2 className="text-2xl">{deck?.name}</h2>
      {deck?.cards !== undefined ? (
        <CardSwitcher cards={deck.cards} />
      ) : (
        <h3>Deck has no cards!</h3>
      )}
    </div>
  );
}
