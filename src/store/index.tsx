import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import authSlice from  './slices/authSlice'
import userSlice from "./slices/userSlice";

const rootReducer = combineReducers({
    auth: authSlice,
    user: userSlice,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
