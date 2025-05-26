"use client";

import Image from "next/image";

import avatar from "@/assets/images/avatar.png";

import { cn } from "@/lib/utils";
import Logo from "@/components/shared/Logo";

export const Navbar = () => {
    return (
        <nav
            className={cn(
                "fixed top-0 z-50 flex h-[64px] w-full items-center justify-between border border-b bg-white px-8 py-5 2xl:h-[72px]"
            )}
        >
            <Logo />
            <Image className="rounded-full" src={avatar} alt="avatar" width={40} height={40} />
        </nav>
    );
};
