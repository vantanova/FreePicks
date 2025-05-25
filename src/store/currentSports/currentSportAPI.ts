// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// import constants from "@/utils/constants";

// // Define a service using a base URL and expected endpoints
// export const currentSportsApi = createApi({
//   reducerPath: "currentSportsApi",
//   baseQuery: fetchBaseQuery({ baseUrl: constants.urls.currentSports }),
//   endpoints: (build) => ({
//     getPokemonByName: build.query<Pokemon, string>({
//       query: (name) => `pokemon/${name}`,
//     }),
//   }),
// });

// // Export hooks for usage in functional components, which are
// // auto-generated based on the defined endpoints
// export const { useGetPokemonByNameQuery } = currentSportsApi;
