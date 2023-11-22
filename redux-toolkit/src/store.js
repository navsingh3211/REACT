/* eslint-disable default-case */
import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice"

/*
configureStore
i.) automatically combine the reducer
ii.) it automatically work like redux thunk (and corresponding async operation)
iii.) do the work like composeWithDevTools
*/

const store = configureStore({
    reducer:{
        account:accountReducer,
        customer:customerReducer
    }
});




export default store;