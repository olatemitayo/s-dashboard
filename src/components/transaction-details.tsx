import { Box, Flex, Text, Title } from "@mantine/core";
import React from "react";
import { TransactionDetailsIcon } from "..";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { builder } from "@/api/builder";

export function TransactionDetails() {
  const { data } = useQuery({
    queryFn: () => builder.use().supplies.forecast.fetch(),
    queryKey: builder.supplies.forecast.fetch.get(),
    select: ({ data }) => data?.data,
  });
  console.log(data);
  return (
    <Flex w="100%" p={20} gap={18} direction="column">
      <Flex
        gap={8}
        pb={16}
        align="center"
        className="border-b border-[#E3E3E3]"
        w="100%"
      >
        <TransactionDetailsIcon />
        <Title order={3} c="grey.1">
          Transaction Details
        </Title>
      </Flex>
      <Flex gap={20} direction="column">
        {data?.map((item, index) => (
          <Flex key={index} justify="space-between" align="center">
            <Flex align="center" gap={12}>
              <Image
                src={item?.charged_by?.logo}
                alt={"LOGO"}
                width={28}
                height={28}
              />
              <Flex direction="column">
                <Text variant="text166_12">{item?.charged_by?.company}</Text>
                <Text variant="text177_9">{String(item?.created_at)}</Text>
              </Flex>
            </Flex>

            <Text>
              {item?.charge?.type === "debit" ? (
                <Text c="#D62C2C" variant="text160_10">
                  {item?.charge?.currency?.sign}
                  {item?.charge?.amount}
                </Text>
              ) : (
                <Text c="#4EEA7A" variant="text160_10">
                  {item?.charge?.currency?.sign}
                  {item?.charge?.amount}
                </Text>
              )}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}
