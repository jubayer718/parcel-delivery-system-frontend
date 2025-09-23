import { baseApi } from "@/Redux/baseApi";

const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        userInfo: builder.query({
            query: () => ({
                url: "/user/me",
                method: "GET",
            }),
        }),
        getAllUser: builder.query({
            query: () => ({
                url: "/user",
                method: "GET",
            }),
            providesTags: ["USER"],
        }),
        toggleBlockUser: builder.mutation({
            query: ({
                userId,
                isBlocked,
            }: {
                userId: string;
                isBlocked: boolean;
            }) => ({
                url: `/user/block/${userId}`,
                method: "PATCH",
                data: { isBlocked },
            }),
            invalidatesTags: ["USER"],
        }),
        toggleUnBlockUser: builder.mutation({
            query: ({
                userId,
                isBlocked,
            }: {
                userId: string;
                isBlocked: boolean;
            }) => ({
                url: `/user/unblock/${userId}`,
                method: "PATCH",
                data: { isBlocked },
            }),
            invalidatesTags: ["USER"],
        }),
    }),
});

export const {
    useUserInfoQuery,
    useGetAllUserQuery,
    useToggleBlockUserMutation,
    useToggleUnBlockUserMutation
} = userApi;