import { api } from "@/redux/api";
import authReducer from "@/redux/features/auth/auth-slice";
import { storage } from "@/redux/storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist";

const persistConfig = {
    auth: {
        key: "auth",
        storage: storage,
        whitelist: ["refreshToken"],
    },
};

const rootReducer = combineReducers({
    [api.reducerPath]: api.reducer,
    auth: persistReducer(persistConfig.auth, authReducer),
});

export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.REDUX_DEVTOOLS_ENABLED !== "false",
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(api.middleware),
});

export const persister = persistStore(store);
