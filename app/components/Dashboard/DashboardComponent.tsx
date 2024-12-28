"use client";
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import React from 'react'
import { AppSidebar } from './AppSidebar'


interface Props {
    children:React.ReactNode, 
    title:string
}

function DashboardComponent({title, children}:Props) {
  return (
    <>
    
    <div className='h-[100vh] w-full bg-white'>
     <SidebarProvider>
      <AppSidebar />
      <main className='w-full h-[100vh] text-black'>
        <>
        
        <div className='flex items-center gap-1 bg-[#f7f7f8] py-2 px-4 shadow-sm border-b'>
        <SidebarTrigger />
        <div className='font-semibold #f3f3f3z'>{title}</div>
        </div>
        <div className='overflow-scroll no-scrollbar h-[calc(100vh-50px)] no-scrollbar'>
        {children}
        
        </div>
        </>
      </main>
    </SidebarProvider>
     </div>
    </>
  )
}

export default DashboardComponent