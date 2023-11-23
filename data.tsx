import {
  DatabaseIcon,
  FilesIcon,
  HomeIcon,
  ManagementIcon,
  ProjectIcon,
} from "./src";
import { ISidebarItem } from "./types";

export const sideBarItem: ISidebarItem[] = [
  {
    id: 1,
    text: "Dashboard",
    icon: <HomeIcon />,
  },
  {
    id: 2,
    text: "Files",
    icon: <FilesIcon />,
  },
  {
    id: 3,
    text: "Deadline Project",
    icon: <ProjectIcon />,
  },
  {
    id: 4,
    text: "Management",
    icon: <ManagementIcon />,
  },
  {
    id: 4,
    text: "Database",
    icon: <DatabaseIcon />,
  },
];
export const customerSideBarItem: ISidebarItem[] = [
  {
    id: 1,
    text: "Team Award",
    icon: <HomeIcon />,
  },
  {
    id: 2,
    text: "Inovice Data",
    icon: <FilesIcon />,
  },
  {
    id: 3,
    text: "Settings ",
    icon: <ProjectIcon />,
  },
  {
    id: 4,
    text: "Announcement",
    icon: <ManagementIcon />,
  },
  {
    id: 4,
    text: "Media Assets",
    icon: <DatabaseIcon />,
  },
  {
    id: 4,
    text: "Client Feedback",
    icon: <DatabaseIcon />,
  },
];
