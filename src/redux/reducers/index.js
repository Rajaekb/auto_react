import { combineReducers } from 'redux';

import user from './userReducer';

import loading from './loadingReducer'; 

import annonces from './annoncesReducer';

const rootReducer = combineReducers({ user , loading , annonces});

export default rootReducer;