import {
  DatabaseIcon,
  FilesIcon,
  HomeIcon,
  ManagementIcon,
  ProjectIcon,
} from "./components";
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
