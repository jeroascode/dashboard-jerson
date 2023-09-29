import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5001'
    }),
    endpoints: (builder) => ({
        getAssistanceBySubject: builder.query({
            query: () => '/assistance-by-subject',
            transformResponse: (response) => response.Subjects
        }),
        getTopSubject: builder.query({
            query: () => '/top-subject',
            transformResponse: (response) => response.Subjects
        }),
        getTopStudent: builder.query({
            query: () => '/top-student',
            transformResponse: (response) => response.Subjects
        }),
        getTopSubjectMax: builder.query({
            query: () => '/top-subject-max',
            transformResponse: (response) => response.Subjects
        }),
        getTopAcademicProgramAssitance: builder.query({
            query: () => '/top-academic-program-assitance',
            transformResponse: (response) => response.Subjects
        }),
        getStudentsByAcademicProgram: builder.query({
            query: () => '/students-by-academic-program',
            transformResponse: (response) => response.result
        }),
        getStudentsByAcademicProgramMax: builder.query({
            query: () => '/students-by-academic-program-max',
            transformResponse: (response) => response.result
        })
    })
})

export const {
    useGetAssistanceBySubjectQuery,
    useGetTopSubjectQuery,
    useGetTopStudentQuery,
    useGetTopSubjectMaxQuery,
    useGetTopAcademicProgramAssitanceQuery,
    useGetStudentsByAcademicProgramQuery,
    useGetStudentsByAcademicProgramMaxQuery
} = apiSlice