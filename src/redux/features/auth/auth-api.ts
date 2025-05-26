import { AuthResponse, LoginPayload, RegisterPayload, User } from "@/features/types";
import { api } from "@/redux/api";
import { METHOD, TagType } from "@/redux/types";

export const authApi = api?.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<AuthResponse, LoginPayload>({
            query: (data) => ({
                url: "/identity/v1/login/",
                method: METHOD.POST,
                body: data,
            }),
        }),
        register: builder.mutation<AuthResponse, RegisterPayload>({
            query: (data) => ({
                url: "/identity/v1/register/",
                method: METHOD.POST,
                body: data,
            }),
        }),
        refreshToken: builder.mutation<AuthResponse, { refresh_token: string }>({
            query: (data) => ({
                url: "/identity/v1/token-refresh/",
                method: METHOD.POST,
                body: data,
            }),
        }),
        getProfileInfo: builder.query<User, void>({
            query: () => ({
                url: "/identity/v1/me/",
                method: METHOD.GET,
            }),
            providesTags: [TagType.User],
        }),
    }),
});

export const { useLoginMutation, useRegisterMutation, useRefreshTokenMutation, useGetProfileInfoQuery } = authApi;
