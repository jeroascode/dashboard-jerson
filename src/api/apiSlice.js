import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5001'
    }),
    endpoints: (builder) => ({
        getSubjects: builder.query({
            query: () => '/subject',
            transformResponse: (response) => response.Subjects
        }),
        getTopSubject: builder.query({
            query: () => '/top-subject',
            transformResponse: (response) => response.Subjects
        }),
        getTopStudent: builder.query({
            query: () => '/top-student',
            transformResponse: (response) => response.Subjects
        })
    })
})

export const { useGetSubjectsQuery, useGetTopSubjectQuery, useGetTopStudentQuery } = apiSlice