import { flexRender, Table as ReactTable } from "@tanstack/react-table";
import { RxCaretSort } from "react-icons/rx";
import { css, CSSInterpolation } from "@emotion/css";
import { clsx } from "@mantine/core";
export function SDashTable({
  table,
  onRowClick,

  rowHoverStyle,

  excludeFromRowClick = [],
}: {
  table: ReactTable<any>;

  rowHoverStyle?: CSSInterpolation;

  onRowClick?: (param: any) => void;

  excludeFromRowClick?: string[];
}) {
  return (
    <div className="overflow-auto no-scrollbar flex flex-col  h-full pt-4">
      <table className="w-full">
        <thead
          // style={{ borderBlockEnd: "1px solid #121212" }}
          className="border-b border-[#121212] dark:border-b dark:border-white"
        >
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header, index, arr) => {
                return (
                  <th
                    style={{
                      paddingBlockEnd: "12px",
                    }}
                    className={clsx(
                      index === arr.length - 1 && "!pr-6",

                      "table-heading !pl-6"
                    )}
                    key={header.id}
                    colSpan={header.colSpan}
                  >
                    {header.isPlaceholder ? null : (
                      <div
                        {...{
                          className: header.column.getCanSort()
                            ? "cursor-pointer flex gap-1 items-center"
                            : "flex justify-start ",

                          onClick: header.column.getToggleSortingHandler(),
                        }}
                      >
                        {flexRender(
                          header.column.columnDef.header,

                          header.getContext()
                        )}

                        {{
                          asc: header.column.getCanSort() && <RxCaretSort />,

                          desc: header.column.getCanSort() && <RxCaretSort />,
                        }[header.column.getIsSorted() as string] ??
                          (header.column.getCanSort() && <RxCaretSort />)}
                      </div>
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row, idx, arr) => {
            return (
              <tr
                style={{
                  borderBlockEnd: "1px solid #A8A8A8",
                }}
                className={css`
                  ${rowHoverStyle}
                `}
                key={row.id}
              >
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td
                      style={{
                        paddingBlock: "16px",
                      }}
                      color="#5E606A"
                      onClick={() =>
                        onRowClick &&
                        cell.column.id !== "select" &&
                        cell.column.id !== "action" &&
                        !excludeFromRowClick.includes(cell.column.id)
                          ? onRowClick(row.original)
                          : {}
                      }
                      className={clsx(
                        idx === arr.length - 1 && "!border-b-0 text-xs",

                        "table-cells-normal !pl-6"
                      )}
                      key={cell.id}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* <ComponentTablePagination title=" Showing 1 to 5 of 12 entries" /> */}
    </div>
  );
}
