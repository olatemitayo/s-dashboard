import { DashboardLayout, TransactionDetails } from "@/components";
import { Box, Flex } from "@mantine/core";
import React from "react";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <Flex
        bg="#F6F6F6"
        px={32}
        pt={38}
        py={32}
        className="flex-1"
        direction="column"
      >
        <Flex w="100%" justify="space-between">
          <Flex bg="white">
            hi
            <Box></Box>
          </Flex>
          <Flex w="35%" bg="white" className="rounded-xl">
            <TransactionDetails />
          </Flex>
        </Flex>
      </Flex>
    </DashboardLayout>
  );
}
