/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Pagination } from "@/components";
import type { TableProps } from "./";

export default function Table<T>({
  data,
  columns,
  pageCount = 1,
  currentPage = 1,
  onPageChange,
  renderActions,
}: TableProps<T>) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full table-auto text-sm">
        <thead className="bg-neutral-bg2-default border-b border-neutral-st3-default h-12 font-semibold text-lg text-neutral-fg1-default  text-left">
          <tr>
            <th className="px-4 py-3">#</th>
            {columns.map((col, i) => (
              <th key={i} className="px-4">
                {col.header}
              </th>
            ))}
            <th className="px-4 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="border-b h-12 border-neutral-st3-default"
            >
              <td className="px-2">
                <div className="w-8 h-8 bg-neutral-bg2-default rounded flex items-center justify-center text-sm font-normal text-neutral-fg1-default">
                  {rowIndex + 1}
                </div>
              </td>
              {columns.map((col, colIndex) => (
                <td
                  key={colIndex}
                  className="px-4 text-sm font-normal text-neutral-fg1-default"
                >
                  {col.render ? col.render(row) : (row as any)[col.key]}
                </td>
              ))}
              <td className="relative px-4 text-right">
                {renderActions?.(row, rowIndex)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {onPageChange && pageCount > 1 && (
        <div className="w-full mt-6 flex flex-row-reverse">
          <Pagination
            currentPage={currentPage}
            totalPages={pageCount}
            onPageChange={onPageChange}
          />
        </div>
      )}
    </div>
  );
}
