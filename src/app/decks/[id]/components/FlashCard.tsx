import { Card } from "@/app/data/types";
import { CardSide } from "./CardSide";

export function FlashCard(props: {
  card: Card;
  flipped: boolean;
  toggleFlipped: () => void;
  animateShake?: boolean;
  onAnimationEnd?: () => void;
  position?: number;
}) {
  return (
    <div
      className={`absolute w-full max-w-[500px] h-[300px]`}
      style={{
        left: props.position,
        transform: "translateX(-50%)",
        transition: "left 1s ease-in",
      }}
    >
      <div
        className={`h-full w-full${props.animateShake ? " animate-shake" : ""}`}
        onAnimationEnd={props.onAnimationEnd}
        style={{
          perspective: "2000px",
        }}
      >
        <div
          className="relative h-full w-full"
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
    </div>
  );
}
