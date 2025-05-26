import { SingleAuthor } from "@/features/types";
import { api } from "@/redux/api";
import { METHOD, TagType } from "@/redux/types";
import { PaginatedResponse, QueryParams } from "@/types";

export const authorApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getAuthors: builder.query<PaginatedResponse<SingleAuthor>, QueryParams>({
            query: (query) => ({
                url: `/author`,
                method: METHOD.GET,
                params: query,
            }),
            providesTags: [TagType.Author],
        }),
        getAuthorById: builder.query<SingleAuthor, string>({
            query: (id) => `/author/${id}`,
        }),
        addAuthor: builder.mutation<SingleAuthor, SingleAuthor>({
            query: (info) => {
                return {
                    url: "/author",
                    method: METHOD.POST,
                    body: info,
                };
            },
        }),
        editAuthor: builder.mutation<void, SingleAuthor>({
            query: (info) => {
                return {
                    url: `/author/${info.id}`,
                    method: METHOD.PATCH,
                    body: info,
                };
            },
        }),
        deleteAuthor: builder.mutation<SingleAuthor, string>({
            query: (id) => {
                return {
                    url: `/author/${id}`,
                    method: METHOD.DELETE,
                };
            },
        }),
        bulkDeleteAuthors: builder.mutation<SingleAuthor, string[]>({
            query: (ids) => {
                return {
                    url: `/author/bulk-delete`,
                    method: METHOD.DELETE,
                    body: ids,
                };
            },
        }),
        bulkUpdateAuthors: builder.mutation<SingleAuthor, SingleAuthor[]>({
            query: (info) => {
                return {
                    url: `/author/bulk-update`,
                    method: METHOD.PATCH,
                    body: info,
                };
            },
        }),
    }),
});

export const {
    useGetAuthorsQuery,
    useAddAuthorMutation,
    useDeleteAuthorMutation,
    useEditAuthorMutation,
    useGetAuthorByIdQuery,
    useBulkDeleteAuthorsMutation,
    useBulkUpdateAuthorsMutation,
} = authorApi;
