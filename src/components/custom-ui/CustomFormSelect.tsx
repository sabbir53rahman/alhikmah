/* eslint-disable @typescript-eslint/no-explicit-any */

import { Control } from "react-hook-form";

import { cn } from "@/lib/utils";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type TCustomFormSelect = {
    name: string;
    label?: string;
    placeholder?: string;
    className?: string;
    defaultValue?: string;
    description?: string;
    disabled?: boolean;
    required?: boolean;
    options: {
        value: string;
        label: string;
    }[];
    control: Control<any>;
};

const CustomFormSelect = ({
    label,
    name,
    placeholder,
    description,
    options,
    control,
    defaultValue,
    disabled,
    required,
    className,
}: TCustomFormSelect) => {
    return (
        <FormField
            control={control}
            name={name}
            rules={{ required: required ? `${label || name} is required` : false }}
            defaultValue={defaultValue}
            render={({ field, fieldState: { error } }) => {
                const selectedOption = options.find((option) => option.value === field.value);
                return (
                    <FormItem className={cn("space-y-1", className)}>
                        <FormLabel>{label}</FormLabel>
                        <FormControl>
                            <Select value={field.value} onValueChange={field.onChange} disabled={disabled}>
                                <SelectTrigger ref={field.ref} className={cn({ "border-destructive": error })}>
                                    <SelectValue placeholder={placeholder || "Select an option"}>
                                        {selectedOption ? selectedOption.label : placeholder || "Select an option"}
                                    </SelectValue>
                                </SelectTrigger>
                                <SelectContent>
                                    {options.map((option) => (
                                        <SelectItem key={option.value} value={option.value}>
                                            {option.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </FormControl>
                        {description && <FormDescription>{description}</FormDescription>}
                        {error && <FormMessage>{error.message}</FormMessage>}
                    </FormItem>
                );
            }}
        />
    );
};

export default CustomFormSelect;
