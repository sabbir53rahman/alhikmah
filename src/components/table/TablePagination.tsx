import React from "react";

import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Props {
    selectedItems: number;
    page: number;
    pageSize: number;
    count: number;
    onPageChange: (page: number) => void;
    onPageSizeChange: (pageSize: number) => void;
}

export const TablePagination = ({ selectedItems, page, pageSize, count, onPageChange, onPageSizeChange }: Props) => {
    return (
        <div className="flex items-center justify-between">
            <p className="text-sm">
                {selectedItems} of {count} row(s) selected.
            </p>
            <div className="flex items-center gap-5">
                <p className="whitespace-nowrap text-sm">Rows per page</p>
                <Select defaultValue={pageSize.toString()} onValueChange={(value) => onPageSizeChange(Number(value))}>
                    <SelectTrigger className="h-9 gap-2 bg-white px-2">
                        <SelectValue placeholder={pageSize} />
                    </SelectTrigger>
                    <SelectContent className="px-2">
                        <SelectItem className="cursor-pointer" value={"10"}>
                            10
                        </SelectItem>
                        <SelectItem className="cursor-pointer" value={"25"}>
                            25
                        </SelectItem>
                        <SelectItem className="cursor-pointer" value={"50"}>
                            50
                        </SelectItem>
                        <SelectItem className="cursor-pointer" value={"100"}>
                            100
                        </SelectItem>
                    </SelectContent>
                </Select>
                <p className="whitespace-nowrap text-sm">
                    Page {page} of {Math.ceil(count / pageSize)}
                </p>
                <div className="flex gap-2">
                    <Button
                        variant={"icon"}
                        className="h-9 border bg-white p-1"
                        disabled={page === 1}
                        onClick={() => onPageChange(1)}
                    >
                        <ChevronsLeft size={22} strokeWidth={1.5} />
                    </Button>
                    <Button
                        variant={"icon"}
                        className="h-9 border bg-white p-1"
                        disabled={page === 1}
                        onClick={() => onPageChange(page - 1)}
                    >
                        <ChevronLeft size={22} strokeWidth={1.5} />
                    </Button>
                    <Button
                        variant={"icon"}
                        className="h-9 border bg-white p-1"
                        disabled={page >= Math.ceil(count / pageSize)}
                        onClick={() => onPageChange(page + 1)}
                    >
                        <ChevronRight size={22} strokeWidth={1.5} />
                    </Button>
                    <Button
                        variant={"icon"}
                        className="h-9 border bg-white p-1"
                        disabled={page >= Math.ceil(count / pageSize)}
                        onClick={() => onPageChange(Math.ceil(count / pageSize))}
                    >
                        <ChevronsRight size={22} strokeWidth={1.5} />
                    </Button>
                </div>
            </div>
        </div>
    );
};
