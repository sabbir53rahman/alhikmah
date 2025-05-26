"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { generateMetadata } from "@/data/metaData";
import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

export const metadata = generateMetadata("/");

export function DynamicBanner({ heading }: { heading: string }) {
    const pathname = usePathname();
    const pathSegments = pathname
        .split("/")
        .filter(Boolean)
        .map((segment) => ({
            name: segment.charAt(0).toUpperCase() + segment.slice(1),
            path: segment,
        }));

    return (
        <header className="w-full rounded-none bg-[url('/images/dynamic-bg.png')] bg-cover bg-center py-[100px] text-white ">
            <div className=" px-4 sm:px-6 lg:px-8">
                <h1 className="mb-4 text-center h1 text-white ">{heading}</h1>
                <div className="flex items-center justify-center space-x-1 text-sm text-gray-300">
                    <Link href="/" className="transition-colors text-[18px] hover:text-white">
                        হোম
                    </Link>
                    {pathSegments.map((segment, index) => (
                        <div key={segment.path} className="flex items-center">
                            <ChevronRight className="mx-1 h-4 w-4" />
                            <Link
                                href={`/${pathSegments
                                    .slice(0, index + 1)
                                    .map((s) => s.path)
                                    .join("/")}`}
                                className={cn(
                                    "transition-colors hover:text-white text-[18px] ",
                                    index === pathSegments.length - 1 && "text-yellow-500"
                                )}
                            >
                                {segment.name}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </header>
    );
}
