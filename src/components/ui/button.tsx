import * as React from "react";
import Link from "next/link";

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
    `inline-flex select-none gap-1 md:gap-1.5 items-center font-medium justify-center whitespace-nowrap rounded md:rounded-sm text-sm transition-colors
        focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring
        disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-60`,
    {
        variants: {
            variant: {
                default:
                    "bg-primary border border-primary text-white hover:bg-primary-hover hover:border-primary-hover active:bg-primary-click active:border-primary-click",
                secondary:
                    "border hover:border-secondary text-secondary-foreground bg-white hover:bg-secondary-hover hover:text-secondary-foreground active:outline-secondary active:outline-[1px] disabled:bg-muted disabled:text-muted-foreground border-[#B6C1D1]",
                ghost: "text-secondary bg-transparent hover:text-secondary-foreground active:text-secondary-foreground",
                tertiary: `bg-transparent text-primary hover:text-primary-hover active:text-primary-click disabled:text-muted-foreground disabled:cursor-no-drop rounded-none
                            border-b-[1px] border-b-transparent hover:border-b-[1px] hover:border-primary-hover active:border-b-[1px] active:border-primary-click`,
                icon: "bg-transparent hover:bg-secondary-hover disabled:bg-muted disabled:text-muted-foreground",
                danger: "bg-destructive border border-destructive text-white hover:bg-red-500 hover:border-red-500 active:bg-destructive-red-600 active:border-destructive-red-600",
                "danger-outlined":
                    "border border-destructive text-destructive hover:bg-destructive/10 hover:border-red-500 active:bg-destructive/20 active:border-destructive-red-600",
            },
            size: {
                default: "px-6 py-2 xl:py-2 2xl:py-3 text-sm lg:text-base",
                sm: "px-2.5 lg:px-4 py-1 lg:py-1.5 xl:py-2 text-xs",
                lg: "px-6 lg:px-6 py-1.5 lg:py-3 xl:py-3",
            },
        },
        compoundVariants: [
            {
                variant: "tertiary",
                size: ["default", "sm", "lg"],
                class: "p-0",
            },
            {
                variant: "icon",
                size: ["default", "sm", "lg"],
                class: "p-1",
            },
            {
                variant: "ghost",
                size: ["default", "sm", "lg"],
                class: "!p-1",
            },
        ],
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    isLoading?: boolean;
    href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, type = "button", isLoading = false, href, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        const buttonContent = <>{isLoading ? <Loader2 className="size-4 animate-spin" /> : props.children}</>;

        if (href) {
            return (
                <Link className="block" href={href} passHref>
                    <Comp className={cn(buttonVariants({ size, variant, className }))} ref={ref} {...props}>
                        {buttonContent}
                    </Comp>
                </Link>
            );
        }

        return (
            <Comp
                className={cn(buttonVariants({ size, variant, className }))}
                ref={ref}
                type={type}
                disabled={isLoading || props.disabled}
                {...props}
            >
                {buttonContent}
            </Comp>
        );
    }
);

Button.displayName = "Button";

export { Button, buttonVariants };
