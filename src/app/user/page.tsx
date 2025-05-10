'use client';
import { AppSidebar } from '@/components/app-sidebar';
import { DataTable } from '@/components/data-table';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import data from '@/api/data.json';
import { Button } from '@/components/ui/button';
import { Bell, CircleHelp } from 'lucide-react';

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
          </div>
          <div className="flex-1" />
          <div className="flex items-end gap-4 pr-4">
            <div>
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-full border border-gray-200"
              >
                <CircleHelp className="h-5 w-5" />
              </Button>
            </div>
            <div>
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-full border border-gray-200"
              >
                <Bell className="h-5 w-5" />
              </Button>
            </div>
            <div>
              <Avatar>
                <AvatarImage src="/assets/image-profile.png" alt="User Avatar" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>
        <Separator className="h-4" />
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <DataTable data={data} />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
