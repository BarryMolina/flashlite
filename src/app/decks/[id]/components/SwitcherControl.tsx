export function SwitcherControl({
  direction,
  onClick,
}: {
  direction: "forward" | "back";
  onClick?: () => void;
}) {
  return (
    <button onClick={onClick} className="p-2 text-2xl hover:font-bold">
      <span>{direction === "back" ? "<" : ">"}</span>
    </button>
  );
}
