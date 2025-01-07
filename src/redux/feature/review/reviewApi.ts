import { baseApi } from "@/redux/api/baseApi";

const review = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getReviews: builder.query({
      query: () => ({
        url: "/review",
        method: "GET",
      }),
      providesTags: ["Review"],
    }),
    addReview: builder.mutation({
      query: (body) => ({
        url: "/review/add-review",
        body,
        method: "POST",
      }),
      invalidatesTags: ["Review"],
    }),
  }),
});

export const { useGetReviewsQuery, useAddReviewMutation } = review;
