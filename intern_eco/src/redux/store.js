import { ConfigureStoreonfigureStore } from "@reduxjs/toolkit";
import { CaseReducerWithPrepare } from "@reduxjs/toolkit";

export const store =ConfigureStoreonfigureStore({
    reducer:{
        CaseReducerWithPrepare,
    },
});
export type RootState = ReturnType <typeof store.getState>
export type appDispatch = typeof store.dispatch;