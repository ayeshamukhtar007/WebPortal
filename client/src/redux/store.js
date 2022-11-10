import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userRedux";
import cameraReducer from "./cameraRedux";
import serviceReducer from "./serviceRedux";
import alertReducer from "./alertRedux";
import adminRedux from "./adminRedux";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "primary",
  version: 1,
  storage, 
};

const rootReducer = combineReducers({ user: userReducer ,admin :adminRedux, camera: cameraReducer, service: serviceReducer,alert: alertReducer });

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
