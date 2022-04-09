import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { authReducer } from "./reducers/user_reducer";
import { searchReducer } from "./reducers/search_reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "main-root",
  storage,
};

const reducers = combineReducers({
  auth: authReducer,
  search: searchReducer,
});

const initialState = {};

const middleware = [thunk];

const persistedReducers = persistReducer(persistConfig, reducers);

const store = createStore(
  persistedReducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

const persistor = persistStore(store);

export { persistor };
export default store;
