import {
  DatabaseIcon,
  FilesIcon,
  HomeIcon,
  ManagementIcon,
  ProjectIcon,
  TeamIcon,
} from "./src";
import { IQuickTransfer, ISidebarItem } from "./types";

export const sideBarItem: ISidebarItem[] = [
  {
    id: 1,
    text: "Dashboard",
    icon: <HomeIcon />,
    c: "2F70F2",
    link: "/",
  },
  {
    id: 2,
    text: "Files",
    icon: <FilesIcon />,
    link: "#",
    c: "#121212",
  },
  {
    id: 3,
    text: "Deadline Project",
    icon: <ProjectIcon />,
    link: "#",
    c: "#121212",
  },
  {
    id: 4,
    text: "Management",
    icon: <ManagementIcon />,
    link: "#",
    c: "#121212",
  },
  {
    id: 4,
    text: "Database",
    icon: <DatabaseIcon />,
    link: "#",
    c: "#121212",
  },
];
export const customerSideBarItem: ISidebarItem[] = [
  {
    id: 1,
    text: "Team Award",
    icon: <TeamIcon />,
    link: "#",
    c: "#121212",
  },
  {
    id: 2,
    text: "Inovice Data",
    icon: <FilesIcon />,
    link: "#",
    c: "#121212",
  },
  {
    id: 3,
    text: "Settings ",
    icon: <ProjectIcon />,
    link: "#",
    c: "#121212",
  },
  {
    id: 4,
    text: "Announcement",
    icon: <ManagementIcon />,
    link: "#",
    c: "#121212",
  },
  {
    id: 4,
    text: "Media Assets",
    icon: <DatabaseIcon />,
    link: "#",
    c: "#121212",
  },
  {
    id: 4,
    text: "Client Feedback",
    icon: <DatabaseIcon />,
    link: "#",
    c: "#121212",
  },
];

export const QuickTransferData: IQuickTransfer[] = [
  {
    id: "1",
    img: "/mastercard.svg",
  },
  // {
  //   id: "2",
  //   img: "/visa.svg",
  // },
  // {
  //   id: "3",
  //   img: "/mastercard.svg",
  // },
];
