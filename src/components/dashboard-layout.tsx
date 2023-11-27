import { customerSideBarItem } from "@/data";
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
import { ArrowDown2, SearchNormal } from "iconsax-react";
import Image from "next/image";
import React, { useState } from "react";
import {
  DatabaseIcon,
  FilesIcon,
  Hamburger,
  HomeIcon,
  ManagementIcon,
  MessageIcon,
  NotificationIcon,
  ProjectIcon,
  SettingsIcon,
  TeamIcon,
} from "..";
import { ThemeSwitcher } from "./switcher";
import Link from "next/link";
import { useDisclosure } from "@mantine/hooks";
import { useRouter } from "next/router";
import { MessageFormatElement, useIntl } from "react-intl";
import { ISidebarItem } from "@/types";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [opened, { open, close }] = useDisclosure(false);
  const [showModal, setShowModal] = useState(false);
  const { locales } = useRouter();
  const [___, { toggle }] = useDisclosure();

  const intl = useIntl();
  const sidebarTitle: String | MessageFormatElement[] =
    intl.messages["page.home.sidebar.title"];
  const sidebarData: String | MessageFormatElement[] =
    intl?.messages["page.home.sidebar.data"];
  const searchData: String | MessageFormatElement[] =
    intl?.messages["page.home.header.placeholder"];
  const customerSideBarData: String | MessageFormatElement[] =
    intl.messages["page.home.sidebar.lowerpartdata"];
  const sideBarItem: ISidebarItem[] = [
    {
      id: 1,
      text: String(sidebarData.at(0)),
      icon: <HomeIcon />,
      c: "#2F70F2",
      link: "/",
    },
    {
      id: 2,
      text: String(sidebarData.at(1)),
      icon: <FilesIcon />,
      link: "#",
      c: "#121212",
    },
    {
      id: 3,
      text: String(sidebarData.at(2)),
      icon: <ProjectIcon />,
      link: "#",
      c: "#121212",
    },
    {
      id: 4,
      text: String(sidebarData.at(3)),
      icon: <ManagementIcon />,
      link: "#",
      c: "#121212",
    },
    {
      id: 4,
      text: String(sidebarData.at(4)),
      icon: <DatabaseIcon />,
      link: "#",
      c: "#121212",
    },
  ];
  const customerSideBarItem: ISidebarItem[] = [
    {
      id: 1,
      text: String(customerSideBarData.at(0)),
      icon: <TeamIcon />,
      link: "#",
      c: "#121212",
    },
    {
      id: 2,
      text: String(customerSideBarData.at(1)),
      icon: <FilesIcon />,
      link: "#",
      c: "#121212",
    },
    {
      id: 3,
      text: String(customerSideBarData.at(2)),
      icon: <ProjectIcon />,
      link: "#",
      c: "#121212",
    },
    {
      id: 4,
      text: String(customerSideBarData.at(3)),
      icon: <ManagementIcon />,
      link: "#",
      c: "#121212",
    },
    {
      id: 4,
      text: String(customerSideBarData.at(4)),
      icon: <DatabaseIcon />,
      link: "#",
      c: "#121212",
    },
    {
      id: 4,
      text: String(customerSideBarData.at(5)),
      icon: <DatabaseIcon />,
      link: "#",
      c: "#121212",
    },
  ];
  return (
    <Flex className="bg-white   dark:text-white  " h="100vh">
      {/* sidebar  */}
      <Flex
        w="220px"
        miw="max-content"
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
                {String(sidebarTitle.at(0))}
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
                        className="dark:text-white hover:text-[#2F70F2]"
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
                {String(sidebarTitle.at(1))}
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
                        className="dark:text-white hover:text-[#2F70F2]"
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
          <Flex align="center" gap={16}>
            <TextInput
              w={350}
              className="rounded-xl 2xl:max-w-[180px] 2xl:w-max"
              icon={<SearchNormal size={24} />}
              classNames={{ input: "px-6 py-[11px]" }}
              placeholder={String(searchData)}
            />
            <div className="2xl:hidden">
              <Popover
                width="max-content"
                position="bottom"
                withArrow
                shadow="md"
                opened={showModal}
              >
                <Popover.Target>
                  <Flex
                    gap={8}
                    onClick={() => setShowModal(!showModal)}
                    className="cursor-pointer"
                    align="center"
                  >
                    <Text
                      variant="text150_16"
                      className="text-[#121212] dark:text-white text-"
                    >
                      Language
                    </Text>
                    <ArrowDown2 size={16} />
                  </Flex>
                </Popover.Target>
                <Popover.Dropdown>
                  <section className="flex gap-4 justify-center text-[#121212] flex-col">
                    {[...(locales as string[])].sort().map((locale) => (
                      <Link
                        key={locale}
                        href="/"
                        locale={locale}
                        className="block"
                        onClick={() => setShowModal(false)}
                      >
                        {locale === "en"
                          ? "English"
                          : locale === "ar"
                          ? "Arabic"
                          : locale === "fr"
                          ? "French"
                          : ""}
                      </Link>
                    ))}
                  </section>
                </Popover.Dropdown>
              </Popover>
            </div>
          </Flex>
          {/* mobile view profile and hamburger  */}
          <Flex className="hidden 2xl:flex" align="center" gap={8}>
            <Box onClick={open} className="cursor-pointer"></Box>
            <Flex align="center" gap={14}>
              <Avatar>
                <Image src={"/dp.svg"} alt={"profile"} width={36} height={36} />
              </Avatar>
              <Drawer
                position="right"
                opened={opened}
                onClose={close}
                title="Alex Smith"
                classNames={{
                  content: "dark:bg-[#121212]",
                  header: "dark:bg-[#121212]",
                  title: "dark:text-white",
                }}
              >
                {/* Drawer content */}
                {/* mobile view drawer content  */}

                <Flex py={8} direction="column" w="max-content">
                  <Flex direction="column" gap={32}>
                    {/* dashboard title  */}
                    <Flex direction="column" px={8} gap={18}>
                      <Title
                        c="grey.1"
                        order={2}
                        pb={18}
                        className="border-b border-[#E3E3E3]   dark:text-white"
                      >
                        {String(sidebarTitle.at(0))}
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
                                className="dark:text-white hover:text-[#2F70F2]"
                              >
                                {item?.text}
                              </Text>
                            </Flex>
                          </Link>
                        ))}
                      </Flex>
                    </Flex>
                    {/* customer title  */}
                    <Flex direction="column" px={8} gap={18}>
                      <Title
                        c="grey.1"
                        order={2}
                        pb={18}
                        className="border-b border-[#E3E3E3] dark:text-white"
                      >
                        {String(sidebarTitle.at(1))}
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
                                className="dark:text-white hover:text-[#2F70F2]"
                              >
                                {item?.text}
                              </Text>
                            </Flex>
                          </Link>
                        ))}
                      </Flex>
                    </Flex>
                    <Flex gap={24} align="center">
                      <MessageIcon />
                      <SettingsIcon />
                      <NotificationIcon />
                    </Flex>
                    <div>
                      <Popover
                        width="max-content"
                        position="bottom"
                        withArrow
                        shadow="md"
                        opened={showModal}
                      >
                        <Popover.Target>
                          <Flex
                            gap={8}
                            onClick={() => setShowModal(!showModal)}
                            className="cursor-pointer"
                            align="center"
                          >
                            <Text
                              variant="text150_16"
                              className="text-[#121212] dark:text-white text-"
                            >
                              Language
                            </Text>
                            <ArrowDown2 size={16} />
                          </Flex>
                        </Popover.Target>
                        <Popover.Dropdown>
                          <section className="flex gap-4 justify-center text-[#121212] flex-col">
                            {[...(locales as string[])].sort().map((locale) => (
                              <Link
                                key={locale}
                                href="/"
                                locale={locale}
                                className="block"
                                onClick={() => setShowModal(false)}
                              >
                                {locale === "en"
                                  ? "English"
                                  : locale === "ar"
                                  ? "Arabic"
                                  : locale === "fr"
                                  ? "French"
                                  : ""}
                              </Link>
                            ))}
                          </section>
                        </Popover.Dropdown>
                      </Popover>
                    </div>
                    <ThemeSwitcher />
                  </Flex>
                </Flex>
              </Drawer>
            </Flex>

            <Box onClick={open} className="cursor-pointer">
              <Hamburger />
            </Box>
          </Flex>
          {/* laptop view header  */}
          <Flex gap={32} align="center" className="2xl:hidden">
            <Flex gap={24} align="center">
              <MessageIcon />
              <SettingsIcon />
              <NotificationIcon />
            </Flex>
            <Flex align="center" gap={14}>
              <Avatar>
                <Image
                  src={"/dp.svg"}
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
