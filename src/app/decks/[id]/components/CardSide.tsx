export function CardSide(props: {
  children: React.ReactNode;
  flipped: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      className="absolute w-full h-full p-10 border flex items-center justify-center bg-white w-full shadow-md"
      onClick={props.onClick}
      style={{
        backfaceVisibility: "hidden",
        transform: props.flipped ? "rotateX(180deg)" : "rotateX(0)",
      }}
    >
      {props.children}
    </button>
  );
}
