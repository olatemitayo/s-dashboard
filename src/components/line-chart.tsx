import { builder } from "@/api/builder";
import { Box, Flex, Text } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { ArrowDown2 } from "iconsax-react";
import React from "react";
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

export function LineChart() {
  // get graph data
  const { data: graphData } = useQuery({
    queryFn: () => builder.use().transaction.logs.fetch(),
    queryKey: builder.transaction.logs.use(),
    select: ({ data }) => data?.data,
  });
  console.log(graphData);
  return (
    <Flex direction="column" gap={18}>
      <Flex justify="space-between" gap={8}>
        <Flex gap={16}>
          <Flex align="center" gap={10}>
            <Text variant="text150_16" c="#444444" className="dark:text-white">
              Salary
            </Text>
            <Box w={18} h={18} bg="#876AFE" className="rounded-[5px]"></Box>
          </Flex>
          <Flex align="center" gap={10}>
            <Text
              w="max-content"
              variant="text150_16"
              c="#444444"
              className="dark:text-white"
            >
              Cash bond
            </Text>
            <Box w={18} h={18} bg="#FFBC02" className="rounded-[5px]"></Box>
          </Flex>
        </Flex>
        <Flex gap={16}>
          <Flex align="center" gap={16}>
            <Text variant="text1664_12" c="grey.3">
              From
            </Text>
            <Flex align="center" gap={8} className="cursor-pointer">
              <Text variant="text157_14">20 June</Text>
              <ArrowDown2 size={16} />
            </Flex>
          </Flex>
          <Flex align="center" gap={16}>
            <Text variant="text1664_12" c="grey.3">
              To
            </Text>
            <Flex align="center" gap={8} className="cursor-pointer">
              <Text variant="text157_14">20 June</Text>
              <ArrowDown2 size={16} />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <ResponsiveContainer width="100%" height={280}>
        <AreaChart
          data={graphData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="date" color="white" />
          <YAxis dataKey='"salary_paid' />

          <Area
            type="monotone"
            dataKey={"salary_paid"}
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey={"salary_paid"}
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Flex>
  );
}
