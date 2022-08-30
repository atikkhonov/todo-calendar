import { combineReducers, configureStore } from "@reduxjs/toolkit";

import slices from "./slices/index" 

const rootRuducer = combineReducers(slices)

export const setupStore = () => {
  return configureStore({
    reducer: rootRuducer
  })
}

export type RootState = ReturnType <typeof rootRuducer>
export type AppStore = ReturnType <typeof setupStore>
export type AppDispath = AppStore['dispatch']