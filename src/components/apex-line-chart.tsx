import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import { Flex, Text, Box } from "@mantine/core";
import { ArrowDown2 } from "iconsax-react";

export default function AreaChart() {
  const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

  const series = [
    {
      name: "series1",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "series2",
      data: [11, 32, 45, 32, 34, 52, 41],
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
      categories: [
        "20 June",
        "21 June",
        "22 June",
        "23 June",
        "24 June",
        "25 June",
        "26 June",
        // "27 June",
        // "28 June",
        // "29 June",
        // "30 June",
      ],
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
      <ApexCharts options={options} series={series} type="area" height={280} />
    </div>
  );
}
