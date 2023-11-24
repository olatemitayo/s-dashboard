import { Flex, Text, Title } from "@mantine/core";
import React from "react";
import { ActiveUserIcon, CardIcon, TransactionIcon } from "..";
import { useQuery } from "@tanstack/react-query";
import { builder } from "@/api/builder";

export function TransactionOverview() {
  const { data } = useQuery({
    queryFn: () => builder.use().transaction.overview.fetch(),
    queryKey: builder.transaction.overview.fetch.get(),
    select: ({ data }) => data?.data,
  });
  //   console.log(data);
  return (
    <Flex gap={12} w={"100%"} justify="space-between">
      {data?.map((item) =>
        item?.name === "active_users" ? (
          // active user
          <Flex
            direction="column"
            gap={14}
            key={item?.name}
            miw={225}
            bg="white"
            h="max-content"
            className="rounded-xl dark:bg-[#1b1919]"
            p={20}
          >
            <Flex align="center" gap={8}>
              <ActiveUserIcon />
              <Title order={3} c="#2F70F2">
                Active User
              </Title>
            </Flex>
            <Flex align="center" gap={6}>
              <Title>
                {((item?.current + item?.last_month) / 1000000).toLocaleString(
                  undefined,
                  {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  }
                )}
                M
              </Title>
              <Text>
                {(
                  ((item?.current - item?.last_month) / item?.last_month) *
                  100
                ).toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
                %
              </Text>
            </Flex>
          </Flex>
        ) : item?.name === "transactions" ? (
          // transaction
          <Flex
            direction="column"
            gap={14}
            key={item?.name}
            miw={225}
            bg="white"
            h="max-content"
            className="rounded-xl dark:bg-[#1b1919]"
            p={20}
          >
            <Flex align="center" gap={8}>
              <TransactionIcon />
              <Title order={3} c="#876AFE">
                Transactions
              </Title>
            </Flex>
            <Flex align="center" gap={6}>
              <Title>
                {((item?.current + item?.last_month) / 1000000).toLocaleString(
                  undefined,
                  {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  }
                )}
                M
              </Title>
              <Text>
                {(
                  ((item?.current - item?.last_month) / item?.last_month) *
                  100
                ).toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
                %
              </Text>
            </Flex>
          </Flex>
        ) : (
          // card issues
          <Flex
            direction="column"
            gap={14}
            key={item?.name}
            miw={225}
            bg="white"
            h="max-content"
            className="rounded-xl dark:bg-[#1b1919]"
            p={20}
          >
            <Flex align="center" gap={8}>
              <CardIcon />
              <Title order={3} c="#FFBC02">
                Cards Issued
              </Title>
            </Flex>
            <Flex align="center" gap={6}>
              <Title>
                {((item?.current + item?.last_month) / 1000000).toLocaleString(
                  undefined,
                  {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  }
                )}
                M
              </Title>
              <Text>
                {(
                  ((item?.current - item?.last_month) / item?.last_month) *
                  100
                ).toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
                %
              </Text>
            </Flex>
          </Flex>
        )
      )}
    </Flex>
  );
}
