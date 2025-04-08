"use client";

import * as React from "react";
import {
  ArrowUpCircleIcon,
  BarChartIcon,
  CameraIcon,
  ClipboardListIcon,
  DatabaseIcon,
  FileCodeIcon,
  FileIcon,
  FileTextIcon,
  FolderIcon,
  HelpCircleIcon,
  LayoutDashboardIcon,
  ListIcon,
  SearchIcon,
  SettingsIcon,
  UsersIcon,
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  RefreshCcwDot,
} from "lucide-react";
import { BiSolidDashboard } from "react-icons/bi";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { IoCard } from "react-icons/io5";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { IoDocumentText } from "react-icons/io5";
import { HiMiniCog6Tooth } from "react-icons/hi2";
import { PiWarningCircleFill } from "react-icons/pi";
import { BiSolidLogOut } from "react-icons/bi";

import { NavDocuments } from "@/components/dashboard/shared/nav-documents";
import { NavMain } from "@/components/dashboard/shared/nav-main";
import { NavSecondary } from "@/components/dashboard/shared/nav-secondary";
import { NavUser } from "@/components/dashboard/shared/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export const appLinks = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: BiSolidDashboard,
      isActive: true,
    },
    {
      title: "IBM",
      url: "#",
      icon: HiBuildingOffice2,
    },
    {
      title: "The Walt Disney Company",
      url: "#",
      icon: BiSolidBarChartAlt2,
    },
    {
      title: "Louis Vuitton",
      url: "#",
      icon: IoCard,
    },
    {
      title: "Master Card",
      url: "#",
      icon: HiMiniCog6Tooth,
    },

    {
      title: "Pizza Hut",
      url: "#",
      icon: HiBuildingOffice2,
    },
    {
      title: "Master Card Hut",
      url: "#",
      icon: IoDocumentText,
    },
    {
      title: "Bank of America",
      url: "#",
      icon: RefreshCcwDot,
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "IBM",
      url: "#",
      icon: PiWarningCircleFill,
    },
    {
      title: "Log Out",
      url: "#",
      icon: BiSolidLogOut,
    },
   
  ],
  // documents: [
  //   {
  //     name: "Data Library",
  //     url: "#",
  //     icon: DatabaseIcon,
  //   },
  //   {
  //     name: "Reports",
  //     url: "#",
  //     icon: ClipboardListIcon,
  //   },
  //   {
  //     name: "Word Assistant",
  //     url: "#",
  //     icon: FileIcon,
  //   },
  // ],
  // projects: [
  //   {
  //     name: "Design Engineering",
  //     url: "#",
  //     icon: Frame,
  //   },
  //   {
  //     name: "Sales & Marketing",
  //     url: "#",
  //     icon: PieChart,
  //   },
  //   {
  //     name: "Travel",
  //     url: "#",
  //     icon: Map,
  //   },
  // ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <Link href="#" className="h-20">
                <ArrowUpCircleIcon className="h-5 w-5" />
                <span className="text-3xl font-bold">Peerless</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <Separator orientation="horizontal" className="h-4 w-full" />
      <SidebarContent>
        <NavMain items={appLinks.navMain} />
        {/* <NavDocuments items={appLinks.documents} /> */}
        <NavSecondary items={appLinks.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={appLinks.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
