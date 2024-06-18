import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/es/storage";

import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";

import { packingChecklistsSliceReducer } from "../../pages/packing-checklist/ui/packingChecklistSlice/packingChecklistSlice";
import { plannerSliceReducer } from "../../pages/planner/ui/plannerSlice/plannerSlice";
import { toDoListSliceReducer } from "../../pages/to-do-list/ui/toDoListSlice/toDoListSlice";
import { themeSliceReducer } from "../../shared/ui/theme/themeSlice/themeSlice";

const rootReducer = combineReducers({
  theme: themeSliceReducer,
  planner: plannerSliceReducer,
  toDoList: toDoListSliceReducer,
  packingChecklists: packingChecklistsSliceReducer,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  // blacklist: ["toDoList"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof rootReducer>;
export const persistor = persistStore(store);
