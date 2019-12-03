import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';

export default combineReducers({
    alert,
    auth,
});
// import { combineReducers } from 'redux';
// import roles from './roles';

// const rootReducer = combineReducers({
//     roles: roles
// });

// export default rootReducer;