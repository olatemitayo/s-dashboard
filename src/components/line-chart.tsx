import { builder } from "@/api/builder";
import { Box, Flex, Text } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { ArrowDown2 } from "iconsax-react";
import React from "react";
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
const areaChartData = [
  {
    name: "20 Jun",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "21 Jun",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "22 Jun",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "23 Jun",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "24 Jun",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "25 Jun",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "26 Jun",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "27 Jun",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "28 Jun",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "29 Jun",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "30 Jun",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
];

export function LineChart() {
  // get graph data
  const { data: graphData } = useQuery({
    queryFn: () => builder.use().transaction.logs.fetch(),
    queryKey: builder.transaction.logs.use(),
    select: ({ data }) => data,
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
          data={areaChartData}
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
          <XAxis dataKey="name" color="white" />
          <YAxis />

          <Area
            type="monotone"
            dataKey="uv"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey="pv"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Flex>
  );
}
