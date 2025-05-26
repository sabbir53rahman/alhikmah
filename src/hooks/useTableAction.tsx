/* eslint-disable @typescript-eslint/no-explicit-any */
import { Book, SingleAuthor, Wishlist } from "@/features/types";
import { AlertType } from "@/providers/AlertProvider";
import { TypedMutationTrigger } from "@reduxjs/toolkit/query/react";
import { toast } from "sonner";

import { useAlert } from "@/hooks/useAlert";

const useTableAction = (
    entityName: "Question" | "Author" | "Book" | "Wishlist",
    selectedRows: SingleAuthor[] | Book[] | Wishlist[],
    selectRows: (rows: []) => void,
    bulkDelete: TypedMutationTrigger<any, any, any>,
    bulkUpdate: TypedMutationTrigger<any, any, any>
) => {
    const { fire } = useAlert();

    const handleTableAction = (actionKey: string) => {
        if (selectedRows.length === 0) {
            toast.info(`Please select ${entityName}s to delete`);
            return;
        }

        let text = "";
        let type: AlertType = AlertType.INFO;
        if (actionKey === "delete") {
            text = `This action cannot be undone. This will permanently delete ${selectedRows.length} ${entityName}s from the servers.`;
            type = AlertType.ERROR;
        }
        // else if (actionKey === State.DRAFT) {
        //     text = `Are you sure you want to mark ${selectedRows.length} ${entityName}s status change to draft?`;
        // } else if (actionKey === State.PUBLISHED) {
        //     text = `Are you sure you want to publish ${selectedRows.length} ${entityName}s? Published ${entityName}s will be visible to students.`;
        // } else if (actionKey === State.IN_REVIEW) {
        //     text = `Are you sure you want to mark ${selectedRows.length} ${entityName}s status change to in review?`;
        // }

        fire({
            title: "Are you sure?",
            text,
            type,
            onConfirm: async () => {
                if (actionKey === "delete") {
                    const response = await bulkDelete({ ids: selectedRows.map((row) => row.id) });

                    if (response.error && "data" in response.error) {
                        const errorData = response.error.data as { detail?: string };

                        if (errorData.detail) {
                            return {
                                error: errorData.detail,
                            };
                        }

                        return {
                            error: `Something went wrong deleting the ${entityName}s. Please try again later.`,
                        };
                    }
                    toast.success(`${selectedRows.length} ${entityName}s deleted successfully`);
                    selectRows([]);
                }
                //  else if (
                //     actionKey === State.DRAFT ||
                //     actionKey === State.PUBLISHED ||
                //     actionKey === State.IN_REVIEW
                // ) {
                //     const questions = selectedRows.map((row) => ({
                //         id: row.id,
                //         state: actionKey,
                //     }));

                //     const response = await bulkUpdate(questions);

                //     if (response?.error) {
                //         if (entityName === "Section Test") {
                //             return {
                //                 error: "Question set must be published to publish a Section test.",
                //             };
                //         }
                //         if (entityName === "Question Set") {
                //             return {
                //                 error: `Passage must be published before publishing the question set. Questions must be published before publishing the question set.`,
                //             };
                //         }
                //         return {
                //             error: `Something went wrong updating the ${entityName}s. Please try again later.`,
                //         };
                //     }
                //     toast.success(`${selectedRows.length} ${entityName}s updated successfully`);
                //     selectRows([]);
                // }
            },
        });
    };

    return { handleTableAction };
};

export default useTableAction;
