import {combineReducers} from 'redux';
import dataReducer from './dataReducer';
import searchReducer from './searchReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({dataReducer, searchReducer, userReducer});
export default rootReducer;
