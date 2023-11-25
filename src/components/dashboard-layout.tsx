import { customerSideBarItem, sideBarItem } from "@/data";
import {
  Box,
  Flex,
  Title,
  Text,
  TextInput,
  Avatar,
  Popover,
  Burger,
  Drawer,
  Button,
} from "@mantine/core";
import { SearchNormal } from "iconsax-react";
import Image from "next/image";
import React from "react";
import { Hamburger, MessageIcon, NotificationIcon, SettingsIcon } from "..";
import { ThemeSwitcher } from "./switcher";
import Link from "next/link";
import { useDisclosure } from "@mantine/hooks";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <Flex className="bg-white   dark:text-white  " h="100vh">
      {/* sidebar  */}
      <Flex
        w="220px"
        direction="column"
        className=" 2xl:hidden border-r-[3px] border-[#E3E3E3] bg-white dark:bg-[#1b1919] dark:border-[#2d6ded]"
        h="100%"
      >
        <Flex direction="column" gap={55}>
          <Box px={30.08} py={30.25}>
            <Image
              width={90.45}
              height={22.96}
              src={"/SDash.svg"}
              alt={"LOGO"}
            />
          </Box>
          <Flex direction="column" gap={72}>
            {/* dashboard title  */}
            <Flex direction="column" px={32} gap={18}>
              <Title
                c="grey.1"
                order={2}
                pb={18}
                className="border-b border-[#E3E3E3]   dark:text-white"
              >
                Dashboard
              </Title>
              <Flex direction="column" gap={28}>
                {sideBarItem.map((item, index) => (
                  <Link href={item?.link} key={item?.id}>
                    <Flex
                      gap={8}
                      align="center"
                      className="cursor-pointer"
                      w="max-content"
                    >
                      <Box>{item?.icon}</Box>
                      <Text
                        variant="text_14"
                        c={item?.c}
                        className="dark:text-white"
                      >
                        {item?.text}
                      </Text>
                    </Flex>
                  </Link>
                ))}
              </Flex>
            </Flex>
            {/* customer title  */}
            <Flex direction="column" px={32} gap={18}>
              <Title
                c="grey.1"
                order={2}
                pb={18}
                className="border-b border-[#E3E3E3] dark:text-white"
              >
                Customer Data
              </Title>
              <Flex direction="column" gap={28}>
                {customerSideBarItem.map((item) => (
                  <Link href={item?.link} key={item?.id}>
                    <Flex
                      gap={8}
                      align="center"
                      className="cursor-pointer"
                      w="max-content"
                    >
                      <Box>{item?.icon}</Box>
                      <Text
                        variant="text150_14"
                        c="grey.1"
                        className="dark:text-white"
                      >
                        {item?.text}
                      </Text>
                    </Flex>
                  </Link>
                ))}
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        {/* <ThemeSwitcher /> */}
        <Box px={30} py={32}>
          <ThemeSwitcher />
        </Box>
      </Flex>
      {/* dashboard layout  */}
      <Flex className="flex-1, overflow-auto w-full" direction="column">
        {/* header  */}
        <Flex
          bg="#F7F7FF"
          h="max-content"
          px={32}
          py={15}
          className="dark:bg-[#1c1c1c] 2xl:!px-[clamp(10px,1vw,24px)]"
          justify="space-between"
          align="center"
        >
          <TextInput
            w={350}
            className="rounded-xl 2xl:w-[150px]"
            icon={<SearchNormal size={24} />}
            classNames={{ input: "px-6 py-[11px]" }}
            placeholder="Search Property..."
          />
          <Flex className="hidden 2xl:flex" align="center" gap={8}>
            <Flex align="center" gap={14}>
              <Avatar>
                <Image
                  src={"/profile.svg"}
                  alt={"profile"}
                  width={30}
                  height={30}
                />
              </Avatar>
              <Text>Alex Smith</Text>
            </Flex>
            <div>
              <Popover width={180} position="bottom" withArrow shadow="md">
                <Flex className="items-center" gap={"25px"}>
                  <Drawer
                    position="right"
                    opened={opened}
                    onClose={close}
                    title="Authentication"
                  >
                    {/* Drawer content */}
                  </Drawer>
                  <Box onClick={open} className="cursor-pointer">
                    <Hamburger />
                  </Box>
                </Flex>
              </Popover>
            </div>
          </Flex>
          <Flex gap={32} align="center" className="2xl:hidden">
            <Flex gap={24} align="center">
              <MessageIcon />
              <SettingsIcon />
              <NotificationIcon />
            </Flex>
            <Flex align="center" gap={14}>
              <Avatar>
                <Image
                  src={"/profile.svg"}
                  alt={"profile"}
                  width={300}
                  height={300}
                />
              </Avatar>
              <Text>Alex Smith</Text>
            </Flex>
          </Flex>
        </Flex>
        {/* children  */}
        <Flex direction="column" className="flex-1 overflow-auto no-scrollbar ">
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
}
