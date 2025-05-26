import React from "react";

import { HeartIcon, InfoIcon, LayoutDashboardIcon, TableOfContentsIcon, UserIcon } from "lucide-react";

import { NavItem } from "@/components/shared/NavItem";

export type SidebarNavItemsType = {
    title: string;
    icon: React.JSX.Element;
    url: string;
    subItems?: { label: string; url: string }[];
    subLinks?: { url: string }[];
};

const navItems: SidebarNavItemsType[] = [
    {
        title: "ড্যাশবোর্ড",
        url: "/dashboard",
        icon: <LayoutDashboardIcon />,
    },
    {
        title: "লেখক",
        url: "/authors",
        icon: <UserIcon />,
        subLinks: [{ url: "/add-author" }],
    },
    {
        title: "প্রকাশনী",
        url: "/publishers",
        icon: <TableOfContentsIcon />,
        subLinks: [{ url: "/add-publisher" }],
    },
    {
        title: "ব্লগ সমূহ",
        url: "/blogs",
        icon: <TableOfContentsIcon />,
    },
    {
        title: "উইশলিস্ট",
        url: "/wishlist",
        icon: <HeartIcon />,
    },
    {
        title: "বই",
        url: "/books",
        icon: <InfoIcon />,
        subLinks: [{ url: "/add-book" }],
    },
];

export const Sidebar = () => {
    return (
        <div className="no-scrollbar h-full space-y-2 overflow-auto border-r bg-white px-3 py-3 2xl:px-4 2xl:py-4">
            {navItems.map((item, index) => (
                <NavItem key={index} navItem={item} />
            ))}
        </div>
    );
};
