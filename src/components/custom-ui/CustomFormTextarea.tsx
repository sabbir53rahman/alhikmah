"use client";

import { Control, FieldValues, Path, PathValue } from "react-hook-form";

import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

type TCustomFormTextarea<T extends FieldValues> = {
    name: Path<T>;
    label?: string;
    placeholder: string;
    description?: string;
    disabled?: boolean;
    defaultValue?: PathValue<T, Path<T>>;
    control: Control<T>;
    required?: boolean;
};

const CustomFormTextarea = <T extends FieldValues>({
    label,
    disabled,
    name,
    placeholder,
    description,
    control,
    defaultValue,
    required,
}: TCustomFormTextarea<T>) => {
    return (
        <FormField
            control={control}
            name={name}
            rules={{
                required: required ? `${label || name} is required` : false,
            }}
            defaultValue={defaultValue}
            render={({ field, fieldState: { error } }) => (
                <FormItem className="space-y-1">
                    <FormLabel className="text-[20px] leading-[32px] text-dark-500">{label}</FormLabel>
                    <FormControl>
                        <div className="relative pb-[10px] pt-[10px]">
                            <Textarea
                                placeholder={placeholder}
                                {...field}
                                value={field.value}
                                disabled={disabled}
                                className={`pl-4 pr-4`}
                            />
                        </div>
                    </FormControl>
                    {description && <FormDescription>{description}</FormDescription>}
                    <FormMessage>{error?.message}</FormMessage>
                </FormItem>
            )}
        />
    );
};

export default CustomFormTextarea;
