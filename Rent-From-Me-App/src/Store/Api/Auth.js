import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import Cookies from 'js-cookie'
const BASE_URL  =  "https://rent-from-me-f11e9aa3a1c2.herokuapp.com"
        const setToken = (token)=>{
        Cookies.set("token",token,{expires:1})
        }
  const Auth = createApi({
    reducerPath:"Auth",
    baseQuery:fetchBaseQuery({
        baseUrl :BASE_URL
    }),
    endpoints:(builder)=>({
        ownerRegistration:builder.mutation({
            query:(newOwnser)=>({           
                    url:"/api/owner/register",
                    method:"POST",
                    body:newOwnser
            }),
        }),
        ownerLogin:builder.mutation({
            query:(user)=>({
                url:"/api/owner/login",
                method:"POST",
                body:user
            }),
            onQueryStarted:async(args,{queryFulfilled})=>{
                try{
                const result  =  await queryFulfilled
                console.log(result)
                setToken(result.data.token)
                }catch(err){
                    console.log(err)

                }
            }
        }),
        fetchUser:builder.query({
            query:()=>({
                
                url:'/api/owner/profile/',
                method:'GET',
               
            })

        })

    
     
    })
})

export const {
    useOwnerRegistrationMutation,
    useOwnerLoginMutation,
    useFetchUserQuery
} = Auth
export default Auth