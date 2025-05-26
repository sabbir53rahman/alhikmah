import { useCallback, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { PaginatedResponse, QueryParams } from "@/types";
import { SerializedError } from "@reduxjs/toolkit";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query/react";

export type GenericUseQueryHook<DataType, QueryParams = void, ErrorType = FetchBaseQueryError | SerializedError> = (
    queryParams: QueryParams
) => {
    data?: DataType;
    error?: ErrorType;
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
    refetch: () => void;
};

export type FilterMode = "state" | "queryParams";

type Props<DataType> = {
    useQueryHook: GenericUseQueryHook<PaginatedResponse<DataType>, QueryParams>;
    keys: string[];
    mode: FilterMode;
    initialParams?: QueryParams;
};

export const useTable = <DataType,>({ useQueryHook, keys, mode, initialParams }: Props<DataType>) => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const getParams = useCallback(() => {
        if (mode === "state") {
            const params = initialParams || {};
            return keys.reduce(
                (acc, key) => {
                    const value = params[key];
                    if (value) {
                        acc[key] = value as string;
                    }
                    return acc;
                },
                {} as { [key: string]: string }
            );
        } else {
            const params = new URLSearchParams(searchParams.toString());
            keys.forEach((key) => {
                if (initialParams && initialParams[key]) {
                    params.set(key, initialParams[key].toString());
                }
            });
            return Object.fromEntries(params.entries()) as { [key: string]: string };
        }
    }, [mode, keys, initialParams, searchParams]);

    const [filterState, setFilterState] = useState(() => (mode === "state" ? getParams() : {}));

    const { isLoading, error, data, refetch } = useQueryHook(mode === "state" ? filterState : getParams());

    const setParams = useCallback(
        (params: { [key: string]: string }) => {
            if (mode === "state") {
                setFilterState((prevState) => ({ ...prevState, ...params }));
            } else {
                const existingParams = new URLSearchParams(searchParams.toString());
                Object.entries(params).forEach(([key, value]) => {
                    if (value) {
                        existingParams.set(key, value.toString());
                    } else {
                        existingParams.delete(key);
                    }
                });
                router.replace(`${pathname}?${existingParams.toString()}`, { scroll: false });
            }
        },
        [mode, searchParams, router, pathname]
    );

    const onPageChange = useCallback(
        (page: number) => {
            setParams({ page: page.toString() });
        },
        [setParams]
    );

    const onPageSizeChange = useCallback(
        (page_size: number) => {
            setParams({ page_size: page_size.toString(), page: "1" });
        },
        [setParams]
    );

    const onSearch = useCallback((searchTerm: string) => setParams({ search: searchTerm, page: "1" }), [setParams]);

    const onFilterChange = useCallback(
        (key: string, value: string | number) => {
            const currentValue = mode === "state" ? filterState[key] : searchParams.get(key);
            let newValue = `${value}`;

            if (newValue && currentValue) {
                const values = currentValue.includes(",") ? currentValue.split(",") : [currentValue];
                if (values.includes(newValue)) {
                    newValue = values.filter((v) => v !== newValue).join(",");
                } else {
                    newValue = [...values, newValue].join(",");
                }
            }

            setParams({ [key]: newValue || "", page: "1" });
        },
        [mode, filterState, searchParams, setParams]
    );

    const clearFilter = useCallback(() => {
        if (mode === "state") {
            const newState: { [key: string]: string } = {};
            keys.forEach((key) => {
                if (key === "page" || key === "page_size" || key === "search") {
                    newState[key] = filterState[key];
                }
            });
            setFilterState(newState);
        } else {
            const newParams = new URLSearchParams(searchParams.toString());
            keys.forEach((key) => {
                if (key !== "page" && key !== "page_size" && key !== "search") {
                    newParams.delete(key);
                }
            });
            router.push(`${pathname}?${newParams.toString()}`, { scroll: false });
        }
    }, [mode, keys, filterState, searchParams, router, pathname]);

    const appliedFilters: { key: string; value: string }[] = keys
        .map((key) => {
            const value =
                mode === "state"
                    ? (filterState[key] as string) || (initialParams?.[key] as string) || ""
                    : searchParams.get(key) || (initialParams?.[key] as string) || "";
            return { key, value };
        })
        .filter((filter) => filter.value !== null && filter.value !== "");

    return {
        isLoading,
        error,
        data,
        appliedFilters,
        refetch,
        onPageChange,
        onPageSizeChange,
        onSearch,
        onFilterChange,
        clearFilter,
    };
};
