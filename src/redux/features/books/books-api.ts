import { Book } from "@/features/types";
import { api } from "@/redux/api";
import { METHOD, TagType } from "@/redux/types";
import { PaginatedResponse, QueryParams } from "@/types";

export const bookApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getBooks: builder.query<PaginatedResponse<Book>, QueryParams>({
            query: (query) => ({
                url: `/book`,
                method: METHOD.GET,
                params: query,
            }),
            providesTags: [TagType.Book],
        }),
        getBookById: builder.query({
            query: (id) => ({
                url: `/book/${id}`,
                method: METHOD.GET,
            }),
            providesTags: [TagType.Book],
        }),
        addBook: builder.mutation({
            query: (info) => ({
                url: "/book",
                method: METHOD.POST,
                body: info,
            }),
            invalidatesTags: [TagType.Book],
        }),
        editBook: builder.mutation({
            query: (info) => ({
                url: `/book/${info._id}`,
                method: METHOD.PATCH,
                body: info,
            }),
            invalidatesTags: [TagType.Book],
        }),
        deleteBook: builder.mutation({
            query: (id) => ({
                url: `/book/${id}`,
                method: METHOD.DELETE,
            }),
            invalidatesTags: [TagType.Book],
        }),
        bulkDeleteBooks: builder.mutation({
            query: (ids) => ({
                url: `/book/bulk-delete`,
                method: METHOD.DELETE,
                body: ids,
            }),
            invalidatesTags: [TagType.Book],
        }),
        bulkUpdateBooks: builder.mutation({
            query: (info) => ({
                url: `/book/bulk-update`,
                method: METHOD.PATCH,
                body: info,
            }),
            invalidatesTags: [TagType.Book],
        }),
    }),
});

export const {
    useGetBooksQuery,
    useAddBookMutation,
    useDeleteBookMutation,
    useEditBookMutation,
    useGetBookByIdQuery,
    useBulkDeleteBooksMutation,
    useBulkUpdateBooksMutation,
} = bookApi;
