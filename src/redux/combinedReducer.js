import { combineReducers } from "redux";
import choiceReducer from './reducers/choiceReducer';
import searchReducer from "./reducers/searchReducer";

const rootReducer = combineReducers({choiceReducer, searchReducer});

export default rootReducer; 