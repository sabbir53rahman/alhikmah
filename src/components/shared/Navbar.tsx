"use client";

import { useState } from "react";
import Link from "next/link";

import { navLinks } from "@/data/navLinks";
import { Menu } from "lucide-react";

import Logo from "@/components/shared/Logo";
import { NavLink } from "@/components/shared/NavLink";
import PrimaryButton from "./PrimaryButton";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="container mx-auto xl_padding bg-white">
            <div className="flex py-[18px] items-center justify-between">
                {/* Logo and Desktop Navigation */}

                <Logo />

                <div className="ml-10 hidden lg:block">
                    <div className="flex items-center">
                        {navLinks.map((link) => (
                            <NavLink key={link.id} href={link.href}>
                                {link.title}
                                
                            </NavLink>
                        ))}
                    </div>
                </div>

                {/* Auth Buttons */}
                <div className="hidden items-center space-x-4 lg:flex">
                    <PrimaryButton text="ডোনেট করুন"/>
                    
                    <Link href="/auth/sign-in">
                        <button className="rounded-[6px] xl:rounded-[8px] border border-[#FFC83A] text-[12px] 2xl:text-[18px] px-[22px] py-[8px] xl:px-[32px] xl:py-[15px] font-bold text-[#3B4856]">
                            লগইন / রেজিস্টার
                        </button>
                    </Link>
                </div>

                {/* Mobile menu button */}
                <div className="lg:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                    >
                        <Menu className="h-6 w-6" />
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="lg:hidden">
                    <div className="space-y-1 flex flex-col self-start px-2 pb-3 pt-2">
                        {navLinks.map((link) => (
                            <NavLink key={link.id} href={link.href}>
                                {link.title}
                            </NavLink>
                        ))}
                    </div>
                    <div className="border-t border-gray-200 pb-3 pt-4">
                        <div className="flex flex-col space-y-2 px-2">
                            <button className="w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700">
                                লগইন করুন
                            </button>
                            <button className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
                                নতুন / রেজিস্টার
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
