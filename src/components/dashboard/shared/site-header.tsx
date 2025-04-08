import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Input } from "../../ui/input";
import { ChevronDown, Search } from "lucide-react";
import { BsBellFill } from "react-icons/bs";
import { PiDotOutlineFill } from "react-icons/pi";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { FaUserLarge } from "react-icons/fa6";
import { getCurrentDate } from "helpers";
import { Button } from "../../ui/button";

export function SiteHeader() {
  return (
    <header className="group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 flex h-12 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        {/* <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        /> */}
        <div className="flex w-full items-center gap-1 lg:gap-2">
          <div className="relative w-full mr-20">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <Search className="size-4" />
            </div>
            <Input
              type="search"
              placeholder="Search Parameters and Params"
              className="block w-full p-2.5 ps-10 "
            />
          </div>
          <div className="text-nowrap text-sm">{getCurrentDate()}</div>{" "}
          <Separator
            orientation="vertical"
            className="mx-2 data-[orientation=vertical]:h-4"
          />
          <div className="text-nowrap text-sm">
            <span className="font-bold">Bussiness Date: </span>
            {getCurrentDate()}
          </div>
          <Button
            variant="secondary"
            size="icon"
            className="rounded-full relative"
          >
            <PiDotOutlineFill
              color="red"
              className="absolute -top-1 -right-1 size-8"
            />
            <BsBellFill />
          </Button>
          <Button
            variant="secondary"
            className="rounded-xl flex items-center gap-x-4"
          >
            <HiBuildingOffice2 /> Ikoyi Branch
            <ChevronDown className=" size-4" />
          </Button>
          <Button
            variant="secondary"
            className="rounded-xl flex items-center gap-x-4"
          >
            <FaUserLarge className="border-2 border-primary p-1 -pb-0 size-6 rounded-sm" />
            Eric Alawoya
            <ChevronDown className=" size-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}
