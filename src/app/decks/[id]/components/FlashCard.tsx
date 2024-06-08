import { Card } from "@/app/data/types";

export function FlashCard({ card }: { card: Card }) {
  return (
    <button>
      <div className="w-[500px] min-h-[300px] p-10 border flex items-center justify-center drop-shadow-md bg-white">
        <h3 className="text-lg">{card.description}</h3>
      </div>
    </button>
  );
}
