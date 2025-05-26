"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    prefixicon?: React.ReactNode;
    suffixicon?: React.ReactNode;
    isErrored?: boolean;
    disabled?: boolean;
    isValid?: boolean;
    inputClassName?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, inputClassName, type, isErrored, isValid, prefixicon, suffixicon, ...props }, ref) => {
        const [isFocused, setIsFocused] = React.useState(false);

        return (
            <div
                className={cn(
                    `border-border bg-input flex items-center gap-2 rounded border px-4 py-2.5 2xl:rounded-sm`,
                    isFocused && `border-focus`,
                    isErrored && `border-destructive ring-destructive-foreground`,
                    isValid && `border-success`,
                    props.disabled && `bg-muted`,
                    className
                )}
            >
                {prefixicon && <div className={`text-icon flex size-5 items-center justify-center`}>{prefixicon}</div>}
                <input
                    ref={ref}
                    type={type}
                    className={cn(
                        `placeholder:text-muted-foreground  w-full border-none bg-transparent outline-none`,
                        inputClassName
                    )}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    {...props}
                />
                {suffixicon && <div className={`size-5`}>{suffixicon}</div>}
            </div>
        );
    }
);
Input.displayName = "Input";

export { Input };
