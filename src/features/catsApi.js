import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const catsApi = createApi({
  reducerPath: 'catsApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://api.thecatapi.com/v1/'}),
  endpoints: builder => ({
    getAllCats: builder.query({
      query: () => 'breeds?limit=20',
    }),
  }),
});

export const {useGetAllCatsQuery} = catsApi;
