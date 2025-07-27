import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const getPagination = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage !== 1) pages.push(1);
      if (currentPage > 3) pages.push("...");
      if (currentPage > 2) pages.push(currentPage - 1);
      pages.push(currentPage);
      if (currentPage < totalPages - 1) pages.push(currentPage + 1);
      if (currentPage < totalPages - 2) pages.push("...");
      if (currentPage !== totalPages) pages.push(totalPages);
    }

    return pages;
  };

  const pages = getPagination();

  return (
    <div className="flex items-center justify-center gap-x-2 p-1 rounded-md border border-neutral-st2-default">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-2 py-1 rounded hover:bg-gray-100 disabled:text-gray-400"
      >
        <ChevronLeft className="w-5 h-5 stroke-neutral-fg1-default" />
      </button>

      {pages.map((page, index) =>
        typeof page === "number" ? (
          <button
            key={index}
            onClick={() => onPageChange(page)}
            className={`w-8 h-8 text-sm rounded ${
              currentPage === page
                ? "bg-teal-600 text-white"
                : "hover:bg-gray-100"
            }`}
          >
            {page}
          </button>
        ) : (
          <span key={index} className="px-2 text-gray-500 select-none">
            {page}
          </span>
        )
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-2 py-1 rounded hover:bg-gray-100 disabled:text-gray-400"
      >
        <ChevronRight className="w-5 h-5 stroke-neutral-fg1-default" />
      </button>
    </div>
  );
};

export default Pagination;
