import React from "react";

import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface Props {
    children: React.ReactNode;
    trigger: React.ReactNode;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    align?: "start" | "center" | "end";
    triggerClassName?: string;
    className?: string;
}

export default function CustomPopover({
    children,
    trigger,
    align = "start",
    triggerClassName,
    className,
    onOpenChange,
    open,
}: Props) {
    return (
        <Popover open={open} onOpenChange={onOpenChange}>
            <PopoverTrigger asChild className={triggerClassName}>
                {trigger}
            </PopoverTrigger>
            <PopoverContent
                align={align}
                className={cn("pointer-events-auto w-fit rounded-sm p-2.5 drop-shadow-sm", className)}
            >
                {children}
            </PopoverContent>
        </Popover>
    );
}
