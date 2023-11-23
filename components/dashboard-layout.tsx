import { Box, Flex, Title } from "@mantine/core";
import Image from "next/image";
import React from "react";

export function DashboardLayout() {
  return (
    <Flex>
      {/* sidebar  */}
      <Flex w="220px" direction="column">
        <Box px={30.08} py={30.25}>
          <Image width={90.45} height={22.96} src={"/SDash.svg"} alt={"LOGO"} />
        </Box>
        <Flex direction="column">
          <Title c="1F1F1F">Dashboard</Title>
        </Flex>
      </Flex>
      {/* dashboard layout  */}
      <Flex className="flex-1"></Flex>
    </Flex>
  );
}
