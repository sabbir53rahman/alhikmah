"use client";

import { useRouter } from "next/navigation";

import PublisherTable from "@/features/publishers/PublisherTable";
import { Publisher } from "@/features/types";
import { useGetPublishersQuery } from "@/redux/features/publishers/publisher-api";
import { useAppDispatch } from "@/redux/hook";

import { useTable } from "@/hooks/useTable";
import { ErrorComponent } from "@/components/table/ErrorComponent";
import { TableLoadingSkeleton } from "@/components/table/TableLoadingSkeleton";

const Page = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();

    const {
        isLoading,
        error,
        data,
        onPageChange,
        onPageSizeChange,
        onFilterChange,
        clearFilter,
        onSearch,
        appliedFilters,
        refetch,
    } = useTable<Publisher>({
        useQueryHook: useGetPublishersQuery,
        keys: ["search", "page", "page_size"],
        mode: "queryParams",
    });

    const queryProps = {
        search: appliedFilters.find((filter) => filter.key === "search")?.value || "",
        page: parseInt(appliedFilters.find((filter) => filter.key === "page")?.value || "1"),
        pageSize: parseInt(appliedFilters.find((filter) => filter.key === "page_size")?.value || "10"),
    };

    if (isLoading) {
        return <TableLoadingSkeleton columns={6} />;
    }

    if (error) {
        return <ErrorComponent onRetry={() => router.refresh()} />;
    }

    if (!data) {
        return <ErrorComponent onRetry={() => router.refresh()} title={"No Data Found"} />;
    }

    return (
        <PublisherTable
            data={data}
            queryProps={queryProps}
            onPageChange={onPageChange}
            onPageSizeChange={onPageSizeChange}
            onSearch={onSearch}
            appliedFilter={appliedFilters}
            onFilterChange={onFilterChange}
            clearFilter={clearFilter}
            onCreatePress={() => router.push("/add-publisher")}
            refetch={refetch}
        />
    );
};

export default Page;
