//@ts-ignore

import { combineReducers } from 'redux';
import * as loginSagaReducer from './LoginReducer';

export default combineReducers(Object.assign(loginSagaReducer));
