import { customerSideBarItem, sideBarItem } from "@/data";
import { Box, Flex, Title, Text, TextInput, Avatar } from "@mantine/core";
import { SearchNormal } from "iconsax-react";
import Image from "next/image";
import React from "react";
import { MessageIcon, NotificationIcon, SettingsIcon } from "..";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <Flex>
      {/* sidebar  */}
      <Flex
        w="220px"
        direction="column"
        className="border-[3px] border-[#E3E3E3]"
        h="100vh"
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
                className="border-b border-[#E3E3E3]"
              >
                Dashboard
              </Title>
              <Flex direction="column" gap={28}>
                {sideBarItem.map((item) => (
                  <Flex
                    key={item?.id}
                    gap={8}
                    align="center"
                    className="cursor-pointer"
                    w="max-content"
                  >
                    <Box>{item?.icon}</Box>
                    <Text variant="text_14" c="grey.1">
                      {item?.text}
                    </Text>
                  </Flex>
                ))}
              </Flex>
            </Flex>
            {/* customer title  */}
            <Flex direction="column" px={32} gap={18}>
              <Title
                c="grey.1"
                order={2}
                pb={18}
                className="border-b border-[#E3E3E3]"
              >
                Customer Data
              </Title>
              <Flex direction="column" gap={28}>
                {customerSideBarItem.map((item) => (
                  <Flex
                    key={item?.id}
                    gap={8}
                    align="center"
                    className="cursor-pointer"
                    w="max-content"
                  >
                    <Box>{item?.icon}</Box>
                    <Text variant="text150_14" c="grey.1">
                      {item?.text}
                    </Text>
                  </Flex>
                ))}
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      {/* dashboard layout  */}
      <Flex className="flex-1" direction="column">
        {/* header  */}
        <Flex
          w="100%"
          bg="#F7F7FF"
          h="max-content"
          px={32}
          py={15}
          justify="space-between"
          align="center"
        >
          <TextInput
            w={350}
            className="rounded-xl"
            icon={<SearchNormal size={24} />}
            classNames={{ input: "px-6 py-[11px]" }}
            placeholder="Search Property..."
          />
          <Flex gap={32} align="center">
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
        <Flex direction="column" className="flex-1">
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
}
