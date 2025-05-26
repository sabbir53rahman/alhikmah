import { Overview } from "@/features/types";
import { api } from "@/redux/api";
import { METHOD, TagType } from "@/redux/types";
import { QueryParams } from "@/types";

export const dashboardApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getOverview: builder.query<Overview, QueryParams>({
            query: () => ({
                url: `/dashboard`,
                method: METHOD.GET,
            }),
            providesTags: [TagType.Dashboard],
        }),
    }),
});

export const { useGetOverviewQuery } = dashboardApi;
