import { buildCreateApi } from "@reduxjs/toolkit/query";
import { apiSlice } from "../../app/api/apiSlice";

const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => {
    console.log(builder);
    return {
      getUSers: builder.mutation({
        query: (e) => {
          console.log("sdf",e);
          return "/users";
        },
        keepUnusedDataFor: 5,
      }),
    };
  },
});
export const { useGetUSersMutation } = usersApiSlice;
export default usersApiSlice;
