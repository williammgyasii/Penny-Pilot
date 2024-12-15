"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { ChevronRight, LogOutIcon } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import * as React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { navItems } from "@/lib/data";
import { Icons } from "./ui/icons";
import { ProfessionsByCategory } from "@/types/professionTypes";
import { useAppDispatch } from "@/redux/reduxhooks";
import { LOG_OUT_USER } from "@/redux/functions/authFunctions";
import axios from "axios";
import { addToast } from "@/redux/features/toastSlice";

export default function AppSidebar() {
  const { currentUser } = useSelector((state: RootState) => state.auth);
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const defaultProfession = "Web Developer";
  const professionCategory = ProfessionsByCategory.find((item) =>
    item.professions.includes(defaultProfession)
  );
  const handleSignout = async () => {
    try {
      await dispatch(LOG_OUT_USER()).unwrap();
      const result = await axios.post("/api/auth/logout");
      if (result) {
        router.push("/login");
        dispatch(
          addToast({
            message: "Signed Out created successfully!",
            type: "success",
          })
        );
      }
    } catch (error) {
      console.log("Error Signing out...", error);
    }
  };

  return (
    <Sidebar className="text-white">
      <SidebarHeader>
        <div className="flex h-full text-white gap-4 text-sidebar-accent-foreground ">
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
            <Avatar>
              <AvatarImage
                src={currentUser?.profileImage}
                alt="@shadcn"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className="group-data-[collapsible=icon]:hidden flex flex-col flex-1 font-poppins text-left text-sm leading-tight">
            <span className="inline-block truncate text-inherit text-md tracking-normal uppercase">
              {`${currentUser?.firstName} ${currentUser?.lastName}`}
            </span>
            <span className="inline-block truncate text-inherit text-xs text-gray-300">
              {professionCategory?.professions.find(
                (item) => item === defaultProfession
              )}
            </span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="py-5 overflow-x-hidden">
        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-100">
            Financial Management
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => {
                const Icon = item.icon ? Icons[item.icon] : Icons.logo;
                // const Icon = item.icon ? CheckCircle : CheckCheckIcon;
                return item?.items && item?.items?.length > 0 ? (
                  <Collapsible
                    key={item.title}
                    asChild
                    defaultOpen={item.isActive}
                    className="group/collapsible"
                  >
                    <SidebarMenuItem>
                      {/* <SidebarMenuSkeleton /> */}

                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton
                          size={"lg"}
                          tooltip={item.title}
                          isActive={pathname === item.url}
                        >
                          {item.icon && <Icon />}
                          <span className="group-data-[collapsible=icon]:hidden">
                            {item.title}
                          </span>
                          <ChevronRight className="ml-auto transition-transform duration-200 group-data-[collapsible=icon]:hidden group-data-[state=open]/collapsible:rotate-90" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>

                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.items?.map((subItem) => (
                            <SidebarMenuSubItem key={subItem.title}>
                              <SidebarMenuSubButton
                                className="text-white"
                                asChild
                                isActive={pathname === subItem.url}
                              >
                                <Link href={subItem.url}>
                                  <span>{subItem.title}</span>
                                </Link>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                ) : (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      size={"lg"}
                      asChild
                      tooltip={item.title}
                      isActive={pathname === item.url}
                    >
                      <Link href={item.url}>
                        <Icon />
                        <span className="group-data-[collapsible=icon]:hidden">
                          {item.title}
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={handleSignout}
              size={"lg"}
              className="hover:!bg-purple-400 cursor-pointer hover:text-white"
              asChild
            >
              <div className="w-full bg-red-900 flex text-current justify-between items-center">
                <span className="group-data-[collapsible=icon]:hidden">
                  Logout
                </span>
                <LogOutIcon />
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
