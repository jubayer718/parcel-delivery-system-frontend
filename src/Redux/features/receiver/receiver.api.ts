import { baseApi } from "@/Redux/baseApi";


const receiverApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getIncomingParcels: builder.query({
      query: () => ({
        url: "/parcels/incoming",
        method: "GET",
      }),
   
    }),
    confirmParcelDelivery: builder.mutation({
      query: (parcelId) => ({
        url: `/parcels/confirm-delivery/${parcelId}`,
        method: "PATCH",
      }),
         invalidatesTags:["RECEIVER"]
    }),
    getDeliveryHistory: builder.query({
      query: () => ({
        url: "/parcels/history",
        method: "GET",
      }),
      providesTags:["RECEIVER"]
    }),
  })
})



export const {
  useGetIncomingParcelsQuery,
  useConfirmParcelDeliveryMutation,
  useGetDeliveryHistoryQuery
} = receiverApi