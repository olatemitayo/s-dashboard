import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import { Flex, Text, Box } from "@mantine/core";
import { ArrowDown2 } from "iconsax-react";
import dayjs from "dayjs";
import { useQuery } from "@tanstack/react-query";
import { builder } from "@/api/builder";

export default function AreaChart() {
  // get graph data
  const { data } = useQuery({
    queryFn: () => builder.use().transaction.logs.fetch(),
    queryKey: builder.transaction.logs.use(),
    select: ({ data }) => data?.data,
  });
  const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

  const series = [
    {
      name: "Salary",
      data: data?.map((item) => item?.salary_paid?.toString()?.slice(0, 2)),
    },
    {
      name: "Cash Bond",
      data: data?.map((item) =>
        item?.cash_bond_bought?.toString()?.slice(0, 2)
      ),
    },
  ];
  const options: ApexOptions = {
    chart: {
      height: 270,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
      colors: ["#876AFE", "#FFBC02"],
    },
    xaxis: {
      type: "datetime",
      categories: data?.map((item) => dayjs(item?.date)?.format("MMM DD")),
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        gradientToColors: ["#eceaf5", "transparent"],
        shadeIntensity: 0,
        type: "horizontal",
        stops: [0, 100, 100, 100],
      },
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
    legend: {
      show: false,
    },
    responsive: [
      {
        breakpoint: 1440,
        options: {
          legend: {
            show: false,
            position: "bottom",
            offsetX: -10,
            offsetY: 0,
          },
        },
      },
    ],
  };

  return (
    <div id="chart" className="w-full no-scrollbar flex-col">
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
        <Flex gap={16} className="flex-wrap">
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
      <ApexCharts
        options={options}
        series={series as unknown as any}
        type="area"
        height={280}
      />
    </div>
  );
}
