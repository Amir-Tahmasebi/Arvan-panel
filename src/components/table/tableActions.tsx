/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import { MoreHorizontal, TriangleAlert } from "lucide-react";
import { Button, Modal } from "@/components";
import { APP_ROUTES, ButtonVariant } from "@/config";

interface TableActionsProps<T> {
  row: T;
  isDropdownOpen: boolean;
  isModalOpen: boolean;
  loading?: boolean;
  onToggleDropdown: () => void;
  onDelete: () => void;
  onCancel: () => void;
  onConfirmDelete: () => void;
}

export default function TableActions<T>({
  row,
  isDropdownOpen,
  isModalOpen,
  loading = false,
  onToggleDropdown,
  onDelete,
  onCancel,
  onConfirmDelete,
}: TableActionsProps<T>) {
  return (
    <>
      <Button
        onClick={onToggleDropdown}
        variant={ButtonVariant["secondary-outline"]}
        className="max-w-10 flex justify-center items-center"
      >
        <MoreHorizontal className="w-4 h-4" />
      </Button>

      {isDropdownOpen && (
        <div className="absolute w-[144px] overflow-hidden right-5 top-12 z-10 p-2 rounded-lg bg-white shadow-lg shadow-[#00000029] ">
          <Link href={APP_ROUTES.ADMIN.ARTICLES.EDIT.replace(":slug", (row as any).id)}>
            <Button
              variant={ButtonVariant.text}
              className="text-left w-full text-sm font-normal h-9"
            >
              Edit
            </Button>
          </Link>
          <Button
            variant={ButtonVariant.text}
            className="text-left w-full text-sm font-normal h-9"
            onClick={onDelete}
          >
            Delete
          </Button>
        </div>
      )}

      <Modal isOpen={isModalOpen} onClose={onCancel}>
        <div className="h-14 flex items-center px-6">
          <span className="text-neutral-fg1-default font-semibold text-base">
            Delete Article
          </span>
        </div>
        <div className="h-[132px] w-full flex flex-col justify-center items-center gap-y-2 border-y border-neutral-st3-default">
          <span className="bg-error-bg1-default w-14 h-14 rounded-full p-4">
            <TriangleAlert className="w-6 h-6 text-error-fg1-default" />
          </span>
          <span className="text-neutral-fg1-default font-normal text-sm">
            Are you sure you want to delete this article?
          </span>
        </div>
        <div className="flex justify-end items-center gap-x-4 h-[72px] px-6">
          {loading && (
            <Button
              variant={ButtonVariant["secondary"]}
              className="max-w-[78px]"
              onClick={onCancel}
            >
              loading ...
            </Button>
          )}
          <Button
            className="max-w-[75px]"
            variant={ButtonVariant.error}
            onClick={onConfirmDelete}
            disabled={loading}
          >
            Delete
          </Button>
          <Button
            variant={ButtonVariant["secondary-outline"]}
            className="max-w-[78px]"
            onClick={onCancel}
          >
            Cancel
          </Button>
        </div>
      </Modal>
    </>
  );
}
