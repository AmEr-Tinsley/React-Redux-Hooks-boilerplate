import { combineReducers}  from 'redux';
import postreducer from './postreducer';
import userreducer from './userreducer';
export default combineReducers({
    posts : postreducer,
    users : userreducer
});