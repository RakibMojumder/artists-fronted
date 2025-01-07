import { baseApi } from "@/redux/api/baseApi";

const user = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (body) => ({
        url: "/user/login",
        body,
        method: "POST",
      }),
    }),
  }),
});

export const { useLoginUserMutation } = user;
