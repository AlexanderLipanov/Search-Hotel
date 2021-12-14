import { combineReducers } from "redux";
import choiceReducer from './reducers/choiceReducer';
import searchReducer from "./reducers/searchReducer";
import loginReducer from './reducers/loginReducer';

const rootReducer = combineReducers({choiceReducer, searchReducer, loginReducer});

export default rootReducer; 