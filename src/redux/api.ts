import { config } from "@/config";
import { METHOD, RootState, tagTypes } from "@/redux/types";
import {
    BaseQueryFn,
    createApi,
    FetchArgs,
    fetchBaseQuery,
    FetchBaseQueryError,
    retry,
} from "@reduxjs/toolkit/query/react";
import { toast } from "sonner";

export const API_BASE_URL = process.env.NEXT_PUBLIC_REST_API_ENDPOINT;
export const API_TIMEOUT = 60_000;

export const baseQuery = fetchBaseQuery({
    baseUrl: config.baseUrl,
    timeout: API_TIMEOUT,
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.accessToken;
        if (token) {
            headers.set("Authorization", `Bearer ${token}`);
        }
        return headers;
    },
});

export const baseQueryWithReAuth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
    args,
    api,
    extraOptions
) => {
    let result = await baseQuery(args, api, extraOptions);

    if (result.error && result.error.status === 401) {
        const refreshToken = (api.getState() as RootState).auth.refreshToken;

        if (refreshToken) {
            const refreshResult = await baseQuery(
                {
                    url: "/identity/v1/token-refresh/",
                    method: METHOD.POST,
                    body: { refresh_token: refreshToken },
                },
                api,
                extraOptions
            );

            if (refreshResult.data) {
                api.dispatch({
                    type: "auth/setCredentials",
                    payload: refreshResult.data,
                });

                result = await baseQuery(args, api, extraOptions);
            } else {
                api.dispatch({ type: "auth/logout" });
                toast.error("Session expired");
            }
        } else {
            api.dispatch({ type: "auth/logout" });
        }
    }

    return result;
};

export const api = createApi({
    reducerPath: "api",
    baseQuery: retry(baseQueryWithReAuth, { maxRetries: 0 }),
    endpoints: () => ({}),
    tagTypes: tagTypes,
});
