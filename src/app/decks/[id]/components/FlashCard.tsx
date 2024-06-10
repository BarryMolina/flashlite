import { Card } from "@/app/data/types";
import { CardSide } from "./CardSide";

export function FlashCard(props: {
  card: Card;
  flipped: boolean;
  toggleFlipped: () => void;
}) {
  return (
    <div style={{ perspective: "2000px" }}>
      <div
        className="min-h-[300px] relative"
        style={{
          transition: "transform 300ms ease-out",
          transformStyle: "preserve-3d",
          transform: props.flipped ? "rotateX(180deg)" : "rotateX(0)",
        }}
      >
        <CardSide flipped={false} onClick={props.toggleFlipped}>
          <h3 className="text-md sm:text-lg">{props.card.front}</h3>
        </CardSide>
        <CardSide flipped={true} onClick={props.toggleFlipped}>
          <h3 className="text-md sm:text-lg">{props.card.back}</h3>
        </CardSide>
      </div>
    </div>
  );
}
