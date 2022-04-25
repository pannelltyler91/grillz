import {configureStore} from '@reduxjs/toolkit'
import orderSlice  from './features/order'
import  pricingSlice from './features/pricing'

export const store = configureStore({
    reducer:{
        pricing:pricingSlice,
        order:orderSlice
    }
})