import { Book, Home, Inbox, Users, Search, Settings, MessageCircle, Smartphone, LogOut, FileVideo } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { signOut } from "next-auth/react"
import { usePathname } from "next/navigation"


// Menu items.
const items = [
  {
    title: "Home",
    url: "/dashboard",
    icon: Home,
  },
  {
    title:"All Synopsis",
    url:"/all-synopsis", 
    icon:Smartphone
  },
  {
    title: "Selected Synopsis",
    url: "/selected-synopsis",
    icon: Inbox,
  },
  {
    title: "Registered Teams",
    url: "/registered-teams",
    icon: Users,
  },

  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
]

export function AppSidebar() {

    const LogoutHandler =async()=>{
        signOut({callbackUrl:"/"});
    }

    const pathName = usePathname();
    


  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-[1.5rem] text-center font-bold py-8 text-black">AURA 2025</SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className={pathName.includes(`${item.url}`) ? "bg-[#efefef]" : ""}>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Button onClick={LogoutHandler}> <LogOut /> Logout</Button>
      </SidebarFooter>


    </Sidebar>
  )
}
