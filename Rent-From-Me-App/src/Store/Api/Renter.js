import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import Cookies from 'js-cookie'
const BASE_URL  =  "https://rent-from-me-f11e9aa3a1c2.herokuapp.com"
       const setToken = (token)=>{
        Cookies.set("token",token,{expires:1})
        console.log(token)
        }
  const Renter = createApi({
    reducerPath:"Renter",
    baseQuery:fetchBaseQuery({
        baseUrl :BASE_URL
    }),
    invalidatesTags:["Renter"],
    endpoints:(builder)=>({
        renterRegistration:builder.mutation({
            query:(newRenter)=>({           
                    url:"/api/renter/register",
                    method:"POST",
                    body:newRenter
            }),
            invalidatesTags:["Renter"]
        }),
        renterLogin:builder.mutation({
            query:(user)=>({
                url:"/api/renter/login",
                method:"POST",
                body:user
            }),
            invalidatesTags:["Renter"],
            onQueryStarted:async(args,{queryFulfilled})=>{
                try{
                const result  =  await queryFulfilled
                console.log(result)
                setToken(result.data.token)
                console.log(result.data.token)
                }catch(err){
                    console.log(err)

                }

            }
        }),
        invalidatesTags:["Renter"],
        fetchRenter:builder.query({
            query:()=>({
                
                url:'/api/renter/profile/',
                method:'GET',
               
            })

        })

    
     
    })
})

export const {
    useRenterRegistrationMutation,
    useRenterLoginMutation,
    useFetchRenterQuery
} = Renter
export default Renter