import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import Cookies  from 'js-cookie'
const BASE_URL  =  "https://rent-from-me-f11e9aa3a1c2.herokuapp.com"
const getCookies = ()=>{
    return Cookies.get('token')
}
export const itemSlice =  createApi({
    reducerPath:"itemSlice",
    baseQuery:fetchBaseQuery({
        baseUrl:BASE_URL,
        prepareHeaders:(Headers)=>{
            const token  =  getCookies()
            if(token){
                Headers.set("Authorization",`Barear ${token}`)
            }
            return Headers
         }
        
    }),
    tagTypes:["items"],

    endpoints:(builder)=>({
        getItems:builder.query({
           query:()=>{
            return{
                url:'/api/items',
                method:'GET',

            }
           },
            providesTags:["items"]
            
        }),
        
        createItem:builder.mutation({
            query:(newItem)=>({
                url:"/api/items/create",
                method:'POST',
                body:newItem
            }),
            invalidatesTags:["items"]

        })
    })
})

export const {useCreateItemMutation,useGetItemsQuery} = itemSlice