import exampleStore from '@states/example.reducer';
import userDataStore from '@states/userData.reducer';
import { combineReducers } from 'redux';

export default combineReducers({
    exampleStore,
    userDataStore,
});
