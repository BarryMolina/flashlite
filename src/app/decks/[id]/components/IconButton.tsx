export function IconButton(props: {
  children?: React.ReactNode;
  onClick?: () => void;
  active?: boolean;
}) {
  return (
    <button
      className={`p-2 rounded-full${
        props.active ? " bg-rose-300" : " hover:bg-gray-50"
      }`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
