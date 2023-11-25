import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Text } from "@mantine/core";
import { ITableResult } from "@/types";

export const TableColumns: ColumnDef<ITableResult>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: (info) => (
      <Text c="gray.3" variant="text_14">
        {info.getValue() as string}
      </Text>
    ),
    enableSorting: false,
  },
  {
    accessorKey: "actual_value",
    header: "Actual",
    cell: (info) => (
      <Text c="gray.3" variant="text_14">
        {info.getValue() as number}
      </Text>
    ),
    enableSorting: false,
  },
  {
    accessorKey: "forecasted_value",
    header: "Forecast",
    cell: (info) => (
      <Text c="gray.3" variant="text_14">
        {info.getValue() as string}
      </Text>
    ),
    enableSorting: false,
  },

  {
    accessorKey: "q1_variance",
    header: "Variance",
    cell: (info) => (
      <Text c="gray.3" variant="text_14">
        {info.getValue() as string}
      </Text>
    ),
    enableSorting: false,
  },
  {
    accessorKey: "q2_variance",
    header: "Variance",
    cell: (info) => (
      <Text c="gray.3" variant="text_14">
        {info.getValue() as string}
      </Text>
    ),
    enableSorting: false,
  },
  {
    accessorKey: "q3_variance",
    header: "Variance",
    cell: (info) => (
      <Text c="gray.3" variant="text_14">
        {info.getValue() as string}
      </Text>
    ),
    enableSorting: false,
  },
  {
    accessorKey: "q4_variance",
    header: "Variance",
    cell: ({ row }) => (
      <Text c="gray.3" variant="text_14">
        {row.original.q4_variance}
      </Text>
    ),
    enableSorting: false,
  },
];
