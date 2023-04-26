import { combineReducers } from "redux";

import eventReducer from "./eventReducer";
import classesReducer from "./classesReducer";

const rootReducer = combineReducers({
    eventReducer,
    classesReducer,
});

export default rootReducer;
