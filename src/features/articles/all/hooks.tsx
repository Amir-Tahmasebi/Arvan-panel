"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { APP_ROUTES } from "@/config";
import { useArticlesStore } from "@/store";
import { removeArticleById } from "@/lib";
import { ToastService } from "@/services";

export const useAllArticles = () => {
  const { push } = useRouter();
  const { removeArticle } = useArticlesStore();

  const [actionRow, setActionRow] = useState<number | null>(null);
  const [modalRow, setModalRow] = useState<number | null>(null);
  const [loadingRow, setLoadingRow] = useState<number | null>(null);

  const handlePageChange = (page: number) => {
    push(`${APP_ROUTES.ADMIN.ARTICLES.INDEX}/${page}`);
  };

  const toggleDropdown = (rowIndex: number) => {
    setActionRow((prev) => (prev === rowIndex ? null : rowIndex));
  };

  const openDeleteModal = (rowIndex: number) => {
    setModalRow(rowIndex);
    setActionRow(null);
  };

  const closeModals = () => {
    setModalRow(null);
    setLoadingRow(null);
  };
  const handleDelete = async (id: string, rowIndex: number) => {
    setLoadingRow(rowIndex);
    try {
      const response = await removeArticleById(id);
      if (response.success) {
        removeArticle(id);
        ToastService.success("Article deleted successfuly");
        setModalRow(null);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingRow(null);
    }
  };
  return {
    actionRow,
    modalRow,
    loadingRow,
    handlePageChange,
    toggleDropdown,
    openDeleteModal,
    closeModals,
    handleDelete,
  };
};
