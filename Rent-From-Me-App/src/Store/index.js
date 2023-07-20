import {configureStore} from '@reduxjs/toolkit/dist'
import {Auth} from './Api/Auth'
import { setupListeners } from '@reduxjs/toolkit/dist/query';
const Store  = configureStore({
    reducer :{
        [Auth.reducerPath]:Auth.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().
    concat(Auth.middleware)
  
})
setupListeners(Store.dispatch)
export default Store;