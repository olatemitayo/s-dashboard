import { Flex, Text, Title } from "@mantine/core";
import React from "react";
import { ActiveUserIcon, CardIcon, TransactionIcon } from "..";
import { useQuery } from "@tanstack/react-query";
import { builder } from "@/api/builder";
import { MessageFormatElement, useIntl } from "react-intl";

export function TransactionOverview() {
  const { data } = useQuery({
    queryFn: () => builder.use().transaction.overview.fetch(),
    queryKey: builder.transaction.overview.fetch.get(),
    select: ({ data }) => data?.data,
  });

  const intl = useIntl();
  const activeUser: String | MessageFormatElement[] =
    intl.messages["page.home.hero.active-users"];
  const activeTransaction: String | MessageFormatElement[] =
    intl.messages["page.home.hero.active-transactions"];
  const cardIssued: String | MessageFormatElement[] =
    intl.messages["page.home.hero.active.cards.issued"];

  return (
    <Flex
      gap={6}
      w={"100%"}
      justify="space-between"
      className="flex-1 overflow-auto no-scrollbar"
    >
      {data?.map((item) =>
        item?.name === "active_users" ? (
          // active user
          <Flex
            direction="column"
            gap={14}
            key={item?.name}
            w={225}
            bg="white"
            h="max-content"
            className="rounded-xl dark:bg-[#1b1919]"
            p={20}
          >
            <Flex align="center" gap={8}>
              <ActiveUserIcon />
              <Title order={3} c="#2F70F2">
                {String(activeUser.at(0))}
              </Title>
            </Flex>
            <Flex align="center" gap={6}>
              <Title>
                {(item?.current / 100000).toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
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
            w={225}
            miw="max-content"
            bg="white"
            h="max-content"
            className="rounded-xl dark:bg-[#1b1919]"
            p={20}
          >
            <Flex align="center" gap={8}>
              <TransactionIcon />
              <Title order={3} c="#876AFE">
                {String(activeTransaction.at(0))}
              </Title>
            </Flex>
            <Flex align="center" gap={6}>
              <Title>${item?.current}</Title>
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
            w={225}
            bg="white"
            h="max-content"
            className="rounded-xl dark:bg-[#1b1919]"
            p={20}
          >
            <Flex align="center" gap={8}>
              <CardIcon />
              <Title order={3} c="#FFBC02">
                {String(cardIssued.at(0))}
              </Title>
            </Flex>
            <Flex align="center" gap={6}>
              <Title>{item?.current}</Title>
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
