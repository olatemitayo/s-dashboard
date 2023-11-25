import { builder } from "@/api/builder";
import {
  DashboardLayout,
  PointsIcon,
  QuickTransfer,
  SDashTable,
  TransactionDetails,
  TransactionOverview,
} from "@/components";
import { TableColumns } from "@/dashboard-table";
import { useCustomTable } from "@/hooks";
import { Box, Flex, Text, Title } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React from "react";

export default function Dashboard() {
  // get table data
  const { data: forcastData } = useQuery({
    queryFn: () => builder.use().supplies.forecast.fetch(),
    queryKey: builder.supplies.forecast.fetch.get(),
    select: ({ data }) => data?.data,
  });
  const { table } = useCustomTable({
    tableData: forcastData,
    columns: TableColumns,
  });

  return (
    <DashboardLayout>
      <Flex
        bg="#F6F6F6"
        px={32}
        pt={38}
        py={32}
        gap={38}
        className="flex-1 dark:bg-[#292727] 2xl:!px-[clamp(10px,1vw,24px)]"
        direction="column"
      >
        <Flex justify="space-between" gap={18} className="3xl:flex-wrap">
          <Flex className="6xl:flex-1 6xl:overflow-auto w-[65%] 3xl:!w-full">
            {/* transaction overview  */}
            <TransactionOverview />
            <Box></Box>
          </Flex>
          <Flex
            w="35%"
            direction="column"
            gap={24}
            className="rounded-xl 3xl:!w-full"
          >
            {/* transaction details  */}
            <TransactionDetails />
            <QuickTransfer />
          </Flex>
        </Flex>

        {/* bar chart and table  */}
        <Flex gap={8} justify="space-between" className="3xl:flex-wrap">
          {/* bar chart  */}
          <Box
            bg="white"
            className="dark:bg-[#1b1919] rounded-xl 5xl:w-[35%] 3xl:w-full"
            w="30%"
          ></Box>
          {/* table  */}
          <Flex
            w="60%"
            bg="white"
            className="dark:bg-[#1b1919] rounded-xl flex-1 overflow-auto 3xl:w-full 2xl:!px-[clamp(12px,1vw,20px)]"
            px={48}
            gap={28}
            pt={22}
            pb={48}
            direction="column"
          >
            <Flex className="flex-1 overflow-auto" direction="column">
              <Flex
                className="border-b border-[#E3E3E3] pb-4 "
                justify="space-between"
                align="center"
              >
                <Flex gap={8}>
                  <PointsIcon />
                  <Title order={3} c="grey.1" className="dark:text-white">
                    Total Points
                  </Title>
                </Flex>
                <Link href={"#"}>
                  <Text variant="text133_12" c="#876AFE">
                    View all
                  </Text>
                </Link>
              </Flex>
              <SDashTable table={table} />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </DashboardLayout>
  );
}
