import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import getBaseUrl from '../../../utils/baseURL'

const  baseQuery = fetchBaseQuery({
    baseUrl: `${getBaseUrl()}/api/houses`,
    credentials: 'include',
    prepareHeaders: (Headers) => {
        const token =  localStorage.getItem('token');
        if(token) {
            Headers.set('Authorization', `Bearer ${token}`);
        }
        return Headers;
    }
})

const housesApi = createApi({
    reducerPath: 'housesApi',
    baseQuery,
    tagTypes: ['Houses'],
    endpoints: (builder) => ({
        fetchAllHouses: builder.query({
            query: () => "/",
            providesTags: ["Houses"]
        }),
        fetchHouseById: builder.query({
            query: (id) => `/${id}`,
            providesTags: (result, error, id) => [{ type: "Houses", id }],
        }),
        addHouse: builder.mutation({
            query: (newHouse) => ({
                url: `/create-house`,
                method: "POST",
                body: newHouse
            }),
            invalidatesTags: ["Houses"]
        }),
        updateHouse: builder.mutation({
            query: ({ id, ...rest }) => ({
                url: `/edit/${id}`,
                method: "PATCH",
                body: rest,
                headers: {
                    'Content-Type': 'application/json'
                }
            }),
            invalidatesTags: ["Houses"]
        }),
        deleteHouse: builder.mutation({
            query: (id) => ({
                url: `/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Houses"]
        })
    })
})

export const { useFetchAllHousesQuery, useFetchHouseByIdQuery, useAddHouseMutation, useUpdateHouseMutation, useDeleteHouseMutation } = housesApi;
export default housesApi;