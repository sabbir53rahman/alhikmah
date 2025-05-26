import React from "react";

import { Navbar } from "@/components/shared/DashboardNavbar";
import { Sidebar } from "@/components/shared/Sidebar";

export default function SidebarLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={`overflow-hidden`}>
            <Navbar />
            <div className="grid h-[100dvh] grid-cols-[220px_1fr] pt-[64px] 2xl:grid-cols-[240px_1fr] 2xl:pt-[72px]">
                <Sidebar />
                <div className="bg-background h-[calc(100dvh-64px)] overflow-y-auto p-8 2xl:h-[calc(100dvh-72px)] 2xl:px-12">
                    {children}
                </div>
            </div>
        </div>
    );
}
