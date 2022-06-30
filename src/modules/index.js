import { combineReducers } from "redux";
import counter from "../container/counter";

const rootReducer = combineReducers({ counter });

export default rootReducer;
