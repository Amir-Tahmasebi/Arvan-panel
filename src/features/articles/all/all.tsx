"use client";

import { ContentHeaderPanel, Table, TableActions } from "@/components";
import { TableColumn } from "@/components/table";
import { IArticle } from "@/types";
import { useArticlesStore } from "@/store";
import { useAllArticles } from "./hooks";

const columns: TableColumn<IArticle>[] = [
  { key: "title", header: "Title" },
  { key: "author", header: "Author" },
  { key: "tags", header: "Tags" },
  { key: "content", header: "Excerpt" },
  { key: "created_at", header: "Created" },
];

const All = () => {
  const {
    actionRow,
    closeModals,
    handlePageChange,
    loadingRow,
    modalRow,
    openDeleteModal,
    toggleDropdown,
    handleDelete,
  } = useAllArticles();
  const { articles, meta } = useArticlesStore();

  const renderTableActions = (row: IArticle, rowIndex: number) => (
    <TableActions
      row={row}
      isDropdownOpen={actionRow === rowIndex}
      isModalOpen={modalRow === rowIndex}
      loading={loadingRow === rowIndex}
      onToggleDropdown={() => toggleDropdown(rowIndex)}
      onDelete={() => openDeleteModal(rowIndex)}
      onCancel={closeModals}
      onConfirmDelete={() => handleDelete(row.id, rowIndex)}
    />
  );
  return (
    <main>
      <div className="bg-white rounded-md overflow-hidden">
        <ContentHeaderPanel title="All Posts" />
        <div className="p-6">
          <Table
            data={articles}
            columns={columns}
            currentPage={meta.page}
            pageCount={meta.totalPages}
            onPageChange={handlePageChange}
            renderActions={renderTableActions}
          />
        </div>
      </div>
    </main>
  );
};

export default All;
