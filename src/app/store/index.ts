import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { themeSliceReducer } from "../../shared/ui/theme/themeSlice/themeSlice";

const rootReducer = combineReducers({
  theme: themeSliceReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
