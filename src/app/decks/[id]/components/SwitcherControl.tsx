export function SwitcherControl({
  direction,
}: {
  direction: "forward" | "back";
}) {
  return (
    <button className="p-2 text-2xl hover:font-bold">
      <span>{direction === "back" ? "<" : ">"}</span>
    </button>
  );
}
