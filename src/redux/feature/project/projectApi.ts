import { baseApi } from "@/redux/api/baseApi";

const project = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProject: builder.query({
      query: () => ({
        url: "/project",
        method: "GET",
      }),
      providesTags: ["Project"],
    }),

    fileUpload: builder.mutation({
      query: (body) => ({
        url: "/project/file-upload",
        body,
        method: "POST",
      }),
    }),

    createProject: builder.mutation({
      query: (body) => ({
        url: "/project/create-project",
        body,
        method: "POST",
      }),
      invalidatesTags: ["Project"],
    }),
  }),
});

export const {
  useGetAllProjectQuery,
  useFileUploadMutation,
  useCreateProjectMutation,
} = project;
