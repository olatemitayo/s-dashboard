import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Avatar, Box, Flex, Text } from "@mantine/core";

import Link from "next/link";

export const DesDetailsTableColumns: ColumnDef<StaffResultByDesignation>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <IndeterminateCheckBox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckBox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },

  {
    accessorKey: "employee",
    header: "Employee",
    cell: ({ row }) => (
      <Flex gap={16} align={"center"}>
        <Avatar
          size={24}
          src={row.original.profile_picture as string}
          alt=""
          w={24}
          h={24}
        />
        <Box>
          <Text variant="rgbody_16">{row.original.full_name as string}</Text>
          <Text variant="smmdbody_12" c={"grey.4"}>
            {row.original.email as string}
          </Text>
        </Box>
      </Flex>
    ),
  },
  {
    accessorKey: "employee_id",
    header: "Employee ID ",
    cell: (info) => (
      <Text c="grey.4" variant="rgbody_16">
        {info.getValue() as string}
      </Text>
    ),
    enableSorting: false,
  },
  {
    accessorKey: "date_joined",
    header: "Joined Date",
    cell: (info) => (
      <Text c="grey.4" variant="rgbody_16">
        {info.getValue() as string}
      </Text>
    ),
    enableSorting: false,
  },

  {
    accessorKey: "action",
    header: "Actions",
    cell: ({ row }) => (
      <Link href={`/administration/employee-management/${row.original.id}`}>
        <Text c="blue.4" variant="rgbody_16">
          View Profile
        </Text>
      </Link>
    ),
    enableSorting: false,
  },
];
