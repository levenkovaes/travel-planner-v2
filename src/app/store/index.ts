import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { packingChecklistsSliceReducer } from "../../pages/packing-checklist/ui/packingChecklistSlice/packingChecklistSlice";
import { themeSliceReducer } from "../../shared/ui/theme/themeSlice/themeSlice";

const rootReducer = combineReducers({
  theme: themeSliceReducer,
  packingChecklists: packingChecklistsSliceReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
