import { Publisher } from "@/features/types";
import { api } from "@/redux/api";
import { METHOD, TagType } from "@/redux/types";
import { PaginatedResponse, QueryParams } from "@/types";

export const publisherApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getPublishers: builder.query<PaginatedResponse<Publisher>, QueryParams>({
            query: (query) => ({
                url: `/publisher`,
                method: METHOD.GET,
                params: query,
            }),
            providesTags: [TagType.Publisher],
        }),
        getPublisherById: builder.query<Publisher, string>({
            query: (id) => ({
                url: `/publisher/${id}`,
                method: METHOD.GET,
            }),
            providesTags: [TagType.Publisher],
        }),
        addPublisher: builder.mutation<Publisher, Publisher>({
            query: (info) => ({
                url: "/publisher",
                method: METHOD.POST,
                body: info,
            }),
            invalidatesTags: [TagType.Publisher],
        }),
        editPublisher: builder.mutation<void, Publisher>({
            query: (info) => ({
                url: `/publisher/${info.id}`,
                method: METHOD.PATCH,
                body: info,
            }),
            invalidatesTags: [TagType.Publisher],
        }),
        deletePublisher: builder.mutation<Publisher, string>({
            query: (id) => ({
                url: `/publisher/${id}`,
                method: METHOD.DELETE,
            }),
            invalidatesTags: [TagType.Publisher],
        }),
        bulkDeletePublishers: builder.mutation<Publisher, string[]>({
            query: (ids) => ({
                url: `/publisher/bulk-delete`,
                method: METHOD.DELETE,
                body: ids,
            }),
            invalidatesTags: [TagType.Publisher],
        }),
        bulkUpdatePublishers: builder.mutation<Publisher, Publisher[]>({
            query: (info) => ({
                url: `/publisher/bulk-update`,
                method: METHOD.PATCH,
                body: info,
            }),
            invalidatesTags: [TagType.Publisher],
        }),
    }),
});

export const {
    useGetPublishersQuery,
    useAddPublisherMutation,
    useDeletePublisherMutation,
    useEditPublisherMutation,
    useGetPublisherByIdQuery,
    useBulkDeletePublishersMutation,
    useBulkUpdatePublishersMutation,
} = publisherApi;
