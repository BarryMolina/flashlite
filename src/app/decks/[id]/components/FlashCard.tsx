import { Card } from "@/app/data/types";
import { CardSide } from "./CardSide";

export function FlashCard(props: {
  card: Card;
  flipped: boolean;
  onClick?: () => void;
  animateShake?: boolean;
  onShakeEnd?: () => void;
  position?: number;
  animateSlide?: boolean;
  zIndex?: number;
}) {
  return (
    <div
      className={`absolute w-full max-w-[540px] h-[300px] px-5`}
      style={{
        left: props.position,
        transform: "translateX(-50%)",
        transition: `opacity 350ms ease-out${
          props.animateSlide ? ", left .5s ease-out" : ""
        }`,
        opacity: props.animateSlide ? 1 : 0,
        zIndex: props.zIndex,
      }}
    >
      <div
        className={`h-full w-full${props.animateShake ? " animate-shake" : ""}`}
        onAnimationEnd={props.onShakeEnd}
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
          <CardSide flipped={false} onClick={props.onClick}>
            <h3 className="text-md sm:text-lg">{props.card.front}</h3>
          </CardSide>
          <CardSide flipped={true} onClick={props.onClick}>
            <h3 className="text-md sm:text-lg">{props.card.back}</h3>
          </CardSide>
        </div>
      </div>
    </div>
  );
}
