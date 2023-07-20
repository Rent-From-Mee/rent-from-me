import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
const BASE_URL  =  "https://rent-from-me-f11e9aa3a1c2.herokuapp.com"
export  const Auth = createApi({
    reducerPath:"Auth",
    baseQuery:fetchBaseQuery({
        baseUrl :BASE_URL
    }),
    endpoints:(builder)=>({
        ownerRegistration:builder.mutation({
            query:(newOwnser)=>({           
                    url:"api/owner/register",
                    method:"POST",
                    body:newOwnser
            }),
        }),
    
     
    })
})

export const {
    useOwnerRegistrationMutation
} = Auth
