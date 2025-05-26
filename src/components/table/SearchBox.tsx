"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";

import { Search, X } from "lucide-react";

import useDebounce from "@/hooks/useDebounce";
import { Input } from "@/components/ui/input";

interface SearchBoxProps {
    onSearch?: (value: string) => void;
    className?: string;
    placeholder?: string;
    debounceDelay?: number;
}

export const SearchBox: React.FC<SearchBoxProps> = ({
    onSearch,
    className,
    placeholder = "Search here",
    debounceDelay = 500,
}) => {
    const searchParams = useSearchParams();
    const initialSearchTerm = searchParams.get("search") || "";

    const [searchTerm, setSearchTerm] = useState(initialSearchTerm);

    useDebounce(
        () => {
            if (searchTerm) {
                onSearch?.(searchTerm);
            }
        },
        [searchTerm],
        debounceDelay
    );

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
        if (!event.target.value) {
            onSearch?.(event.target.value);
        }
    };

    return (
        <Input
            type="text"
            placeholder={placeholder}
            prefixicon={<Search className="text-muted-foreground size-4 lg:size-5" />}
            suffixicon={
                searchTerm ? (
                    <X
                        className="text-muted-foreground hover:text-focus size-4 cursor-pointer lg:size-5"
                        onClick={() => {
                            setSearchTerm("");
                            onSearch?.("");
                        }}
                    />
                ) : null
            }
            className={className}
            value={searchTerm}
            onChange={handleInputChange}
        />
    );
};
