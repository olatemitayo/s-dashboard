import { Flex, Title, Text } from "@mantine/core";
import React from "react";
import { TransactionDetailsIcon, WalletIcon } from ".";
import { QuickTransferData } from "@/data";

export function QuickTransfer() {
  return (
    <Flex
      w="100%"
      p={20}
      direction="column"
      bg="white"
      className=" dark:bg-[#1b1919] rounded-xl "
    >
      <Flex
        gap={12}
        direction="column"
        w="100%"
        className="flex-1 overflow-auto"
      >
        <Flex
          gap={12}
          pb={16}
          className="border-b border-[#E3E3E3] dark:border-white"
        >
          <WalletIcon />
          <Title order={3} c="grey.1" className=" dark:text-[#fff]">
            Quick Transfer
          </Title>
        </Flex>
        <Flex
          className="flex-1 px-[2.5px] overflow-auto rounded-md no-scrollbar"
          gap={14}
        >
          {QuickTransferData.map((item) => (
            <Flex
              miw={150}
              key={item?.id}
              className="border border-[#DFDFDF] rounded-md"
              px={12}
              py={9}
              gap={12}
            >
              <img src={item?.img} alt="" />
              <Text variant="text116_12" className="whitespace-normal">
                3419 Debit Card
              </Text>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}
