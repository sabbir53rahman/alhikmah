"use client";

import { useState } from "react";

import { defaultDifficultyFilter, defaultStateFilter, defaultTableActions } from "@/data/constants";
import { Blog } from "@/features/types";
import { AlertType } from "@/providers/AlertProvider";
import {
    useBulkDeleteBlogsMutation,
    useBulkUpdateBlogsMutation,
    useDeleteBlogMutation,
} from "@/redux/features/blogs/blog-api";
import { GenericTableProps } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { toast } from "sonner";

import { useAlert } from "@/hooks/useAlert";
import useTableAction from "@/hooks/useTableAction";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { DataTable } from "@/components/table/DataTable";
import { RowActions } from "@/components/table/RowActions";

type QueryProps = {
    search: string;
    page: number;
    pageSize: number;
};

type Props = GenericTableProps<Blog, QueryProps> & {
    hiddenFilters?: string[];
    checkboxType?: "radio" | "checkbox";
    selectedRows?: Blog[];
    onRowSelectionChange?: (passages: Blog[]) => void;
    isOnDialog?: boolean;
};

const BlogsTable = (props: Props) => {
    const {
        data: blogs,
        queryProps,
        onPageChange,
        onPageSizeChange,
        onSearch,
        appliedFilter,
        onFilterChange,
        clearFilter,
        onCreatePress,

        checkboxType,
        onRowSelectionChange,
        isOnDialog,
    } = props;

    const [deleteBlog, { isLoading: isDeleting }] = useDeleteBlogMutation();
    const [bulkUpdateBlogs] = useBulkUpdateBlogsMutation();
    const [bulkDeleteBlogs] = useBulkDeleteBlogsMutation();
    const [deletingBlogIds, setDeletingBlogIds] = useState<number[]>([]);

    const { fire } = useAlert();
    const tableFilters = [defaultStateFilter, defaultDifficultyFilter];

    const [selectedRows, setSelectedRows] = useState<Blog[]>([]);

    const selectRows = (rows: Blog[]) => {
        setSelectedRows(rows);
        // onRowSelectionChange?.(rows);
    };

    const columns: ColumnDef<Blog>[] = [
        {
            id: "select",
            header: () => {
                if (checkboxType === "radio") {
                    return null;
                }

                return (
                    <Checkbox
                        checked={
                            (selectedRows.length === blogs.count && blogs.count !== 0) ||
                            (selectedRows.length > 0 && "indeterminate")
                        }
                        onCheckedChange={(value) => {
                            if (value) {
                                selectRows(blogs.data);
                            } else {
                                selectRows([]);
                            }
                        }}
                    />
                );
            },
            cell: ({ row }) => {
                if (checkboxType === "radio") {
                    const checked = selectedRows.map((selectedRow) => selectedRow.id).includes(row.original.id);
                    const onChange = () => {
                        if (checked) {
                            selectRows([]);
                        } else {
                            selectRows([row.original]);
                        }
                    };

                    return (
                        <RadioGroup value={checked ? `selected` : undefined} onValueChange={onChange}>
                            <RadioGroupItem value={`selected`} />
                        </RadioGroup>
                    );
                }

                return (
                    <Checkbox
                        checked={selectedRows.map((selectedRow) => selectedRow.id).includes(row.original.id)}
                        onCheckedChange={(value) => {
                            if (value) {
                                selectRows([...selectedRows, row.original]);
                            } else {
                                selectRows(selectedRows.filter((selectedRow) => selectedRow.id !== row.original.id));
                            }
                        }}
                        aria-label="Select row"
                    />
                );
            },
        },
        {
            id: "title",
            header: "Title",
            cell: ({ row }) => <span className="line-clamp-1 min-w-40 max-w-72">{"row.original.title"}</span>,
        },
        {
            id: "difficulty",
            header: "Difficulty",
            cell: ({ row }) => {
                // const difficulty = row.original.difficulty;
                // const { style, label } = difficultyLabelStyles[difficulty] || { style: "", label: "" };

                return <span className={"style"}>{"label"}</span>;
            },
        },
        {
            id: "actions",
            header: () => <p className="text-center">Actions</p>,
            cell: ({ row }) => {
                return (
                    <RowActions
                        viewUrl={`/content/passages/${row.original.id}/view`}
                        editUrl={`/content/passages/${row.original.id}/edit`}
                        onDelete={() => {
                            selectRows(selectedRows.filter((selectedRow) => selectedRow.id !== row.original.id));

                            fire({
                                title: "Are you sure?",
                                text: "This action cannot be undone. This will permanently delete passage from the servers.",
                                type: AlertType.ERROR,
                                onConfirm: async () => {
                                    setDeletingBlogIds([...deletingBlogIds, row.original.id]);
                                    const response = await deleteBlog(row.original.id);

                                    setDeletingBlogIds(deletingBlogIds.filter((id) => id !== row.original.id));

                                    if (response.error && "data" in response.error) {
                                        const errorData = response.error.data as { detail?: string };

                                        if (errorData.detail) {
                                            return {
                                                error: errorData.detail,
                                            };
                                        }

                                        return {
                                            error: "Something went wrong. Please try again later.",
                                        };
                                    }

                                    toast.success("Author deleted successfully");
                                },
                            });
                        }}
                        isDeleting={isDeleting && deletingBlogIds.includes(row.original.id)}
                    />
                );
            },
        },
    ];

    const { handleTableAction } = useTableAction("Author", selectedRows, selectRows, bulkDeleteBlogs, bulkUpdateBlogs);

    return (
        <DataTable
            name={"ব্লগ"}
            columns={columns}
            data={blogs.data}
            selectedRowsCount={selectedRows.length}
            actions={defaultTableActions}
            onAction={handleTableAction}
            onSearch={onSearch}
            appliedFilter={appliedFilter}
            filters={tableFilters}
            onFilterChange={onFilterChange}
            clearFilter={clearFilter}
            count={blogs.count}
            onCreatePress={onCreatePress}
            page={queryProps.page}
            pageSize={queryProps.pageSize}
            onPageChange={onPageChange}
            onPageSizeChange={onPageSizeChange}
            isOnDialog={isOnDialog}
        />
    );
};

export default BlogsTable;
