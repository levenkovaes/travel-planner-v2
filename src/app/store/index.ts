import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { packingChecklistsSliceReducer } from "../../pages/packing-checklist/ui/packingChecklistSlice/packingChecklistSlice";
import { themeSliceReducer } from "../../shared/ui/theme/themeSlice/themeSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/es/storage";
import { toDoListSliceReducer } from "../../pages/to-do-list/ui/toDoListSlice/toDoListSlice";

const rootReducer = combineReducers({
  theme: themeSliceReducer,
  toDoList: toDoListSliceReducer,
  packingChecklists: packingChecklistsSliceReducer,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: ["toDoList"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export const persistor = persistStore(store);
