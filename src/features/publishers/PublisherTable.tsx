"use client";

import { useState } from "react";

import { defaultDifficultyFilter, defaultStateFilter, defaultTableActions } from "@/data/constants";
import { Publisher } from "@/features/types";
import { AlertType } from "@/providers/AlertProvider";
import {
    useBulkDeletePublishersMutation,
    useBulkUpdatePublishersMutation,
    useDeletePublisherMutation,
} from "@/redux/features/publishers/publisher-api";
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

type Props = GenericTableProps<Publisher, QueryProps> & {
    hiddenFilters?: string[];
    checkboxType?: "radio" | "checkbox";
    selectedRows?: Publisher[];
    onRowSelectionChange?: (passages: Publisher[]) => void;
    isOnDialog?: boolean;
};

const PublisherTable = (props: Props) => {
    const {
        data: publishers,
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

    const [deletePublisher, { isLoading: isDeleting }] = useDeletePublisherMutation();
    const [bulkUpdatePublishers] = useBulkUpdatePublishersMutation();
    const [bulkDeletePublishers] = useBulkDeletePublishersMutation();
    const [deletingPublisherIds, setDeletingPublisherIds] = useState<number[]>([]);

    const { fire } = useAlert();
    const tableFilters = [defaultStateFilter, defaultDifficultyFilter];

    const [selectedRows, setSelectedRows] = useState<Publisher[]>([]);

    const selectRows = (rows: Publisher[]) => {
        setSelectedRows(rows);
        // onRowSelectionChange?.(rows);
    };

    const columns: ColumnDef<Publisher>[] = [
        {
            id: "select",
            header: () => {
                if (checkboxType === "radio") {
                    return null;
                }

                return (
                    <Checkbox
                        checked={
                            (selectedRows.length === publishers.count && publishers.count !== 0) ||
                            (selectedRows.length > 0 && "indeterminate")
                        }
                        onCheckedChange={(value) => {
                            if (value) {
                                selectRows(publishers.data);
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
                                    setDeletingPublisherIds([...deletingPublisherIds, row.original.id]);
                                    const response = await deletePublisher(row.original.id.toString());

                                    setDeletingPublisherIds(
                                        deletingPublisherIds.filter((id) => id !== row.original.id)
                                    );

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
                        isDeleting={isDeleting && deletingPublisherIds.includes(row.original.id)}
                    />
                );
            },
        },
    ];

    const { handleTableAction } = useTableAction(
        "Author",
        selectedRows,
        selectRows,
        bulkDeletePublishers,
        bulkUpdatePublishers
    );

    return (
        <DataTable
            name={"প্রকাশক"}
            columns={columns}
            data={publishers.data}
            selectedRowsCount={selectedRows.length}
            actions={defaultTableActions}
            onAction={handleTableAction}
            onSearch={onSearch}
            appliedFilter={appliedFilter}
            filters={tableFilters}
            onFilterChange={onFilterChange}
            clearFilter={clearFilter}
            count={publishers.count}
            onCreatePress={onCreatePress}
            page={queryProps.page}
            pageSize={queryProps.pageSize}
            onPageChange={onPageChange}
            onPageSizeChange={onPageSizeChange}
            isOnDialog={isOnDialog}
        />
    );
};

export default PublisherTable;
