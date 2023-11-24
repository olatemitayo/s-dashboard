import { Flex, Text, Title } from "@mantine/core";
import React from "react";
import { TransactionDetailsIcon } from "..";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { builder } from "@/api/builder";
import { randomId } from "@mantine/hooks";

export function TransactionDetails() {
  const { data } = useQuery({
    queryFn: () => builder.use().transaction.latest.fetch(),
    queryKey: builder.transaction.latest.fetch.get(),
    select: ({ data }) => data?.data,
  });
  console.log(data);
  return (
    <Flex
      w="100%"
      p={20}
      gap={18}
      direction="column"
      bg="white"
      className=" dark:bg-[#1b1919] rounded-xl"
    >
      <Flex
        gap={8}
        pb={16}
        align="center"
        className="border-b border-[#E3E3E3] dark:border-white"
        w="100%"
      >
        <TransactionDetailsIcon />
        <Title order={3} c="grey.1" className=" dark:text-[#fff]">
          Transaction Details
        </Title>
      </Flex>
      <Flex gap={20} direction="column">
        {data?.map((item, index) => (
          <Flex
            key={randomId as unknown as number}
            justify="space-between"
            align="center"
          >
            <Flex align="center" gap={12}>
              <img
                src={item?.charged_by?.logo}
                alt={"LOGO"}
                width={28}
                height={28}
              />

              <Flex direction="column">
                <Text
                  variant="text166_12"
                  c="grey.1"
                  className=" dark:text-[#fff]"
                >
                  {item?.charged_by?.company}
                </Text>
                <Text
                  variant="text177_9"
                  c="grey.3"
                  className=" dark:text-[#e3e3e3]"
                >
                  {" "}
                  {/* Format the date using Intl.DateTimeFormat */}
                  {new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                  }).format(new Date(item?.created_at))}
                </Text>
              </Flex>
            </Flex>

            <Text key={randomId as unknown as number}>
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
