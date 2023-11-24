import { builder } from "@/api/builder";
import {
  DashboardLayout,
  QuickTransfer,
  SDashTable,
  TransactionDetails,
  TransactionOverview,
} from "@/components";
import { Box, Flex } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import React from "react";

export default function Dashboard() {
  const { data } = useQuery({
    queryFn: () => builder.use().supplies.forecast.fetch(),
    queryKey: builder.supplies.forecast.fetch.get(),
    select: ({ data }) => data?.data?.data,
  });
  console.log({ data });
  return (
    <DashboardLayout>
      <Flex
        bg="#F6F6F6"
        px={32}
        pt={38}
        py={32}
        className="flex-1 dark:bg-[#292727]"
        direction="column"
      >
        <Flex w="100%" justify="space-between" gap={18}>
          <Flex w="65%">
            <TransactionOverview />
            <Box></Box>
          </Flex>
          <Flex w="35%" direction="column" gap={24} className="rounded-xl">
            <TransactionDetails />
            <QuickTransfer />
          </Flex>
        </Flex>

        {/* bar chart and table  */}
        <Box></Box>
        <Box>
          <SDashTable />
        </Box>
      </Flex>
    </DashboardLayout>
  );
}
