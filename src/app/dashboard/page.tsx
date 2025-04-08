import { ChartAreaInteractive } from "@/components/dashboard/shared/chart-area-interactive";
import { DataTable } from "@/components/dashboard/shared/data-table";
import { SectionCards } from "@/components/dashboard/shared/section-cards";
import { AppSidebar } from "@/components/dashboard/shared/app-sidebar";
import { SiteHeader } from "@/components/dashboard/shared/site-header";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator";
import data from "./data.json";
import { Button } from "@/components/ui/button";
import { ChevronDown, PlusCircle } from "lucide-react";
import { DashhboardBreadcrumb } from "@/components/dashboard/shared/breadcrumb";
import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  customer_name: string;
  austomer_category: number;
  principal: string;
  status: "Active" | "Liquidated";
  last_update: string;
};

export const columns: ColumnDef<Payment>[] = [

  {
    accessorKey: "customer_name",
    header: "Customer Name/ID",
  },
  {
    accessorKey: "principal",
    header: "Principal",
  }, 
  {
    accessorKey: "user_alias",
    header: "User Alias",
  }, {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "last updated",
    header: "Last updated",
  },
];

export default function Page() {
  return (
    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
      {/* <SectionCards /> */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-extrabold">Nitendo</h1>
          <DashhboardBreadcrumb />
        </div>
        <Button variant="destructive">
          <PlusCircle className="size-5" />
          New Request
          <ChevronDown className="size-5" />
        </Button>
      </div>
      <div className="flex items-center gap-4">
        <span>Individual</span>
        <span>Corporate</span>
      </div>
      <Separator orientation="horizontal" className="h-4 w-full" />

      <Tabs defaultValue="all-records" className="w-full">
        <div className="flex items-center gap-x-5 my-2">
          <TabsList className="grid w-80 grid-cols-2 h-12 p-2">
            <TabsTrigger
              value="all-records"
              className="data-[state=active]:text-destructive"
            >
              All Records
            </TabsTrigger>
            <TabsTrigger
              value="requests"
              className="data-[state=active]:text-destructive"
            >
              Requests
            </TabsTrigger>
          </TabsList>
          <div className="flex items-center justify-between gap-4 w-full">
            <div className="">
              <div className=""></div>
              <div className="flex items-center gap-4">
                {" "}
                <Separator
                  orientation="vertical"
                  className="mx-2 data-[orientation=vertical]:h-16"
                />
                <div className="">
                  <small>All</small>
                  <div className="text-2xl font-extrabold">100</div>
                </div>{" "}
                <Separator
                  orientation="vertical"
                  className="mx-2 data-[orientation=vertical]:h-16"
                />
                <div className="">
                  <small className="text-destructive">Active</small>
                  <div className="text-2xl font-extrabold">90</div>
                </div>{" "}
                <Separator
                  orientation="vertical"
                  className="mx-2 data-[orientation=vertical]:h-16"
                />
                <div className="">
                  <small>Liquidated</small>
                  <div className="text-2xl font-extrabold">143</div>
                </div>
              </div>
            </div>
            <Button
              variant="outline"
              className="border-destructive text-destructive rounded-sm"
            >
              Created by System-wide
              <ChevronDown className="size-5" />
            </Button>
          </div>
        </div>
        <Separator orientation="horizontal" className="h-4 w-full my-4" />
        <TabsContent value="all-records">
          <DataTable columns={columns} data={data} />
        </TabsContent>
        <TabsContent value="requests"></TabsContent>
      </Tabs>
    </div>
  );
}
