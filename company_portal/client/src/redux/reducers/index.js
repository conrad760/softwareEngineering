import { combineReducers } from 'redux';
import roles from './roles';

const rootReducer = combineReducers({
    roles: roles
});

export default rootReducer;
