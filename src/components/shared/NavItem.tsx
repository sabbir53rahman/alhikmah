"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { ChevronDown } from "lucide-react";

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { SidebarNavItemsType } from "@/components/shared/Sidebar";

const NavItemTitle = ({ icon, title }: { title: string; icon: React.JSX.Element }) => (
    <div className="flex items-center gap-3 2xl:gap-4">
        {icon}
        <span className="text-sm font-medium 2xl:text-base">{title}</span>
    </div>
);

export const NavItem = ({ navItem }: { navItem: SidebarNavItemsType }) => {
    const pathname = usePathname();

    const Wrapper = ({ children }: { children: React.ReactNode }) => {
        if (navItem.subItems && navItem.subItems.length > 0 ? "" : navItem.url) {
            return <Link href={navItem.url}>{children}</Link>;
        }

        return children;
    };

    const isActive =
        pathname.startsWith(navItem.url) || navItem.subLinks?.some((link) => pathname.startsWith(link.url));
    const [isOpen, setIsOpen] = useState(isActive);

    return (
        <Collapsible
            open={navItem.subItems && navItem.subItems.length > 0 ? isOpen : false}
            onOpenChange={setIsOpen}
            className="space-y-1"
        >
            <CollapsibleTrigger asChild>
                <div>
                    <Wrapper>
                        <button
                            className={`flex w-full cursor-pointer items-center justify-between gap-2 rounded-sm px-4 py-2.5 ${
                                isActive ? "bg-primary text-white" : "hover:bg-accent"
                            } active:bg-primary active:text-white`}
                        >
                            <NavItemTitle title={navItem.title} icon={navItem.icon} />
                            {navItem.subItems && navItem.subItems.length > 0 && (
                                <>
                                    <div>
                                        <ChevronDown
                                            size={22}
                                            className="transform transition-transform"
                                            style={{
                                                transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                                            }}
                                        />
                                    </div>
                                </>
                            )}
                        </button>
                    </Wrapper>
                </div>
            </CollapsibleTrigger>
            <CollapsibleContent>
                <div className="m-3 mx-4 space-y-2 2xl:m-4">
                    {navItem.subItems?.map((subItem, index) => (
                        <Link
                            href={subItem.url}
                            key={index}
                            className={`block cursor-pointer rounded-br-sm rounded-tr-sm border-l-4 px-4 py-2 text-sm font-medium hover:bg-accent ${pathname.startsWith(subItem.url) ? "border-l-primary text-primary" : "border-l-transparent"}`}
                        >
                            {subItem.label}
                        </Link>
                    ))}
                </div>
            </CollapsibleContent>
        </Collapsible>
    );
};
