export function CardPagination({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) {
  return (
    <div>
      <span className="text-gray-500">
        {currentPage}/{totalPages}
      </span>
    </div>
  );
}
