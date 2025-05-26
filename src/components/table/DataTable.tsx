import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { Plus } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FilterAction, FilterType } from "@/components/table/FilterAction";
import { SearchBox } from "@/components/table/SearchBox";
import { ActionType, TableAction } from "@/components/table/TableAction";
import { TablePagination } from "@/components/table/TablePagination";

interface Props<TData, TValue> {
    name?: string;
    columns: ColumnDef<TData, TValue>[];
    data: TData[];

    selectedRowsCount: number;
    actions: ActionType[];
    onAction: (key: string) => void;

    onSearch: (value: string) => void;

    appliedFilter: {
        key: string;
        value: string;
    }[];
    filters: FilterType[];
    onFilterChange: (key: string, value: string) => void;
    clearFilter: () => void;

    onCreatePress?: () => void;

    count: number;
    page: number;
    pageSize: number;
    onPageChange: (page: number) => void;
    onPageSizeChange: (pageSize: number) => void;

    isOnDialog?: boolean;
}

export const DataTable = <TData, TValue>({
    name,
    columns,
    data,
    selectedRowsCount,

    actions,
    onAction,

    onSearch,

    appliedFilter,
    filters,
    onFilterChange,
    clearFilter,

    onCreatePress,

    count,
    page,
    pageSize,
    onPageChange,
    onPageSizeChange,
    isOnDialog = false,
}: Props<TData, TValue>) => {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <>
            {!isOnDialog && <h1 className="text-2xl text-secondary-foreground">{name}</h1>}
            <div
                className={cn(
                    "rounded-md bg-white",
                    isOnDialog ? "pb-4" : "px-6 pb-4 pt-2 shadow-[0px_0px_3px_0px_rgba(0,0,0,0.05)]"
                )}
            >
                <div className={cn("sticky top-0 z-50 flex flex-col gap-4 bg-white", isOnDialog ? "pb-4" : "py-4")}>
                    {!isOnDialog && (
                        <div className="flex w-full items-center justify-between gap-4">
                            <SearchBox
                                placeholder={`Search on ${name}`}
                                onSearch={onSearch}
                                className="w-[25vw] bg-white py-2"
                            />

                            {onCreatePress && (
                                <Button size={"sm"} className="text-sm" onClick={onCreatePress}>
                                    <Plus size={20} /> যোগ করুন
                                </Button>
                            )}
                        </div>
                    )}

                    <div className="flex items-center justify-between gap-4">
                        {isOnDialog ? (
                            <SearchBox
                                key={`${name}-search-box`}
                                placeholder={`Search ${name}`}
                                onSearch={onSearch}
                                className={cn("bg-white py-2", isOnDialog ? "w-[17vw]" : "w-[25vw]")}
                            />
                        ) : (
                            <div className="flex items-center gap-4">
                                <TableAction actions={actions} selectedItems={selectedRowsCount} onAction={onAction} />
                                {selectedRowsCount > 0 && (
                                    <span className="text-sm">
                                        {selectedRowsCount} of {count} row(s) selected
                                    </span>
                                )}
                            </div>
                        )}
                        <div className="flex items-center gap-4">
                            <FilterAction
                                appliedFilter={appliedFilter}
                                filters={filters}
                                onFilterChange={onFilterChange}
                                clearFilter={clearFilter}
                            />
                        </div>
                    </div>
                </div>

                <div
                    className={cn(
                        "xll:max-w-[76dvw] mb-4 min-w-full overflow-x-auto rounded-sm border lg:max-w-[72dvw] xl:max-w-[73dvw] 2xl:max-w-[81dvw]",
                        isOnDialog ? "min-h-[48vh]" : "min-h-[60vh]"
                    )}
                >
                    <Table>
                        <TableHeader>
                            {table.getHeaderGroups().map((headerGroup) => (
                                <TableRow key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => {
                                        return (
                                            <TableHead key={header.id}>
                                                {header.isPlaceholder
                                                    ? null
                                                    : flexRender(header.column.columnDef.header, header.getContext())}
                                            </TableHead>
                                        );
                                    })}
                                </TableRow>
                            ))}
                        </TableHeader>
                        <TableBody>
                            {table.getRowModel().rows?.length ? (
                                table.getRowModel().rows.map((row) => (
                                    <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                                        {row.getVisibleCells().map((cell) => (
                                            <TableCell key={cell.id}>
                                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell
                                        colSpan={columns.length}
                                        className={cn("text-center xl:text-xl", isOnDialog ? "h-[43dvh]" : "h-[55dvh]")}
                                    >
                                        No {name} found
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>

                <TablePagination
                    page={page}
                    pageSize={pageSize}
                    count={count}
                    // selectedItems={table.getFilteredSelectedRowModel().rows.length}
                    selectedItems={selectedRowsCount}
                    onPageChange={onPageChange}
                    onPageSizeChange={onPageSizeChange}
                />
            </div>
        </>
    );
};
