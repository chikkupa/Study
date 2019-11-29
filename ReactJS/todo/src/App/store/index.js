// configure store
import { createStore, applyMiddleware, compose } from "redux";
import storage from "redux-persist/lib/storage/session";
import { persistStore, persistReducer } from "redux-persist";
import { createLogger } from "redux-logger";
import createEncryptor from "redux-persist-transform-encrypt";
import rootReducer from "./reducers";

const loggerMiddleware = createLogger({ diff: true });
const encryptor = createEncryptor({
  secretKey: "",
  onError: function(error) {
    // Handle the error.
  },
});
// configure persistance
const persistConfig = {
  key: "root",
  storage,
  transforms: [encryptor],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
// configure store with an initial state
function configureStore(initialState) {
  const enhancer = compose(applyMiddleware(loggerMiddleware));
  return createStore(persistedReducer, initialState, enhancer);
}
const store = configureStore({});
const persistor = persistStore(store);

export const dispatchAction = action => store.dispatch(action); // eslint-disable-line
export const getStore = () => store;
export const getState = () => store.getState();
export default () => ({ store, persistor });
