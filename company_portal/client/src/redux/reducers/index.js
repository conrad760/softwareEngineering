import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import roles from './roles'

export default combineReducers({
    alert,
    auth,
    roles
});

// const rootReducer = combineReducers({
//     roles: roles
// });

// export default rootReducer;