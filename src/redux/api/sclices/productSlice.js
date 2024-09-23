import { api } from "../index";

export const productApi = api.injectEndpoints({
    endpoints: (build) => ({
        getCategories: build.query({
            query: (params) => ({
                url: `/categories`,
                params,
            }),
            providesTags: ["ProductApi"],
        }),
        getCars: build.query({
            query: (params) => ({
                url: "/cars",
                params,
            }),
            providesTags: ["ProductApi"],
        }),
        getCar: build.query({
            query: ({ id }) => ({
                url: `/cars/${id}`,
            }),
            providesTags: ["ProductApi"],
        }),
        createCar: build.mutation({
            query: ({ body }) => ({
                url: `/cars/create`,
                method: "POST",
                body,
            }),
            invalidatesTags: ["ProductApi"],
        }),
        updateCar: build.mutation({
            query: ({ id, body }) => ({
                url: `/cars/${id}`,
                method: "PUT",
                body,
            }),
            invalidatesTags: ["ProductApi"],
        }),
    }),
});

export const {
    useGetCategoriesQuery,
    useGetCarsQuery,
    useGetCarQuery,
    useCreateCarMutation,
    useUpdateCarMutation,
} = productApi;
