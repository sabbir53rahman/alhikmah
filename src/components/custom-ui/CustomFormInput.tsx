"use client";

import { useState } from "react";

import { Eye, EyeOff } from "lucide-react";
import { Control, FieldValues, Path, PathValue } from "react-hook-form";

import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

type TCustomFormInput<T extends FieldValues> = {
    name: Path<T>;
    label?: string;
    placeholder: string;
    description?: string;
    disabled?: boolean;
    defaultValue?: PathValue<T, Path<T>>;
    type?: "email" | "password" | "text" | "number" | "url";
    control: Control<T>;
    required?: boolean;
    min?: number;
    icon?: React.ReactNode;
    iconPosition?: "start" | "end";
};

const CustomFormInput = <T extends FieldValues>({
    label,
    disabled,
    name,
    placeholder,
    type,
    description,
    control,
    defaultValue,
    required,
    min,
    icon,
    iconPosition = "end",
}: TCustomFormInput<T>) => {
    const [show, setShow] = useState(false);

    return (
        <FormField
            control={control}
            name={name}
            rules={{
                required: required ? `${label || name} is required` : false,
            }}
            defaultValue={defaultValue}
            render={({ field, fieldState: { error } }) => (
                <FormItem className="space-y-1 text-[#3B4856]">
                    <FormLabel className="text-[#3f3e3e] font-semibold  lg:text-[14px] leading-[16px]">{label}</FormLabel>
                    <FormControl>
                        <div className="relative pb-[8px] pt-1">
                            {/* Input Field */}
                            <Input
                                placeholder={placeholder}
                                type={(type === "password" ? (show ? "text" : "password") : type) || "text"}
                                {...field}
                                value={type === "number" ? (field.value ? Number(field.value) : "") : field.value}
                                onChange={(e) =>
                                    field.onChange(type === "number" ? Number(e.target.value) : e.target.value)
                                }
                                disabled={disabled}
                                min={min}
                                className={`pl-${icon && iconPosition === "start" ? "[50px]" : "4"} pr-${
                                    type === "password" || (icon && iconPosition === "end") ? "10" : "4"
                                } py-4`}
                            />

                            {/* Icon: Start Position */}
                            {icon && iconPosition === "start" && (
                                <div className="absolute inset-y-0 left-3 flex cursor-pointer items-center">{icon}</div>
                            )}

                            {/* Password Toggle Icon */}
                            {type === "password" &&
                                (show ? (
                                    <Eye
                                        onClick={() => setShow((prev) => !prev)}
                                        className="absolute right-4 top-[40%] cursor-pointer"
                                        size={16}
                                    />
                                ) : (
                                    <EyeOff
                                        onClick={() => setShow((prev) => !prev)}
                                        className="absolute right-4 top-[40%] cursor-pointer"
                                        size={16}
                                    />
                                ))}

                            {/* Icon: End Position */}
                            {icon && iconPosition === "end" && type !== "password" && (
                                <div className="absolute inset-y-0  right-3 flex cursor-pointer items-center">
                                    {icon}
                                </div>
                            )}
                        </div>
                    </FormControl>
                    {description && <FormDescription>{description}</FormDescription>}
                    <FormMessage>{error?.message}</FormMessage>
                </FormItem>
            )}
        />
    );
};

export default CustomFormInput;
