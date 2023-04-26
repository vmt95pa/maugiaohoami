import thunkMiddleware from "redux-thunk";
import {legacy_createStore as createStore, applyMiddleware} from 'redux';
import rootReducer from "./rootReducer";

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
console.log("store: " + store.getState())