import { combineReducers } from 'redux';
import { ManagerCoursesReducer } from './ManagerCoursesReducer';
import { ManageUserReducer } from './ManageUserReducer';

export const rootReducer = combineReducers({
    ManagerCoursesReducer,
    ManageUserReducer
});