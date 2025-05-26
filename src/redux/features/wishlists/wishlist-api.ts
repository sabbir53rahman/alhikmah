import { Wishlist } from "@/features/types";
import { api } from "@/redux/api";
import { METHOD, TagType } from "@/redux/types";
import { PaginatedResponse, QueryParams } from "@/types";

export const wishlistApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getWishlist: builder.query<PaginatedResponse<Wishlist>, QueryParams>({
            query: (query) => ({
                url: `/wishlist`,
                method: METHOD.GET,
                params: query,
            }),
            providesTags: [TagType.Wishlist],
        }),
        getWishlistById: builder.query({
            query: (id) => ({
                url: `/wishlist/${id}`,
                method: METHOD.GET,
            }),
            providesTags: [TagType.Wishlist],
        }),
        addWishlist: builder.mutation({
            query: (info) => ({
                url: "/wishlist",
                method: METHOD.POST,
                body: info,
            }),
            invalidatesTags: [TagType.Book],
        }),
        editWishlist: builder.mutation({
            query: (info) => ({
                url: `/wishlist/${info._id}`,
                method: METHOD.PATCH,
                body: info,
            }),
            invalidatesTags: [TagType.Book],
        }),
        deleteWishlist: builder.mutation({
            query: (id) => ({
                url: `/wishlist/${id}`,
                method: METHOD.DELETE,
            }),
            invalidatesTags: [TagType.Wishlist],
        }),
        bulkDeleteWishlist: builder.mutation({
            query: (ids) => ({
                url: `/wishlist/bulk-delete`,
                method: METHOD.DELETE,
                body: ids,
            }),
            invalidatesTags: [TagType.Book],
        }),
        bulkUpdateWishlist: builder.mutation({
            query: (info) => ({
                url: `/wishlist/bulk-update`,
                method: METHOD.PATCH,
                body: info,
            }),
            invalidatesTags: [TagType.Book],
        }),
    }),
});

export const {
    useGetWishlistQuery,
    useAddWishlistMutation,
    useDeleteWishlistMutation,
    useEditWishlistMutation,
    useGetWishlistByIdQuery,
    useBulkDeleteWishlistMutation,
    useBulkUpdateWishlistMutation,
} = wishlistApi;
