import axios from 'axios';


import * as constants from './constants';
import { logoutUser } from './actions/authActionCreators';


export const apiMiddleware = ({dispatch, getState }) => next => action => {
    if (action.type !== constants.API) return next(action);

    dispatch({ type: constants.TOGGLE_LOADER });
    
    const BASE_URL = 'https://autobackend.devcom-media.com';
   // const BASE_URL = 'http://localhost:8000';
    const AUTH_TOKEN = getState().user.token;
    if (AUTH_TOKEN)
    axios.defaults.headers.common['Authorization'] = `Bearer ${AUTH_TOKEN}`;
    //axios.defaults.headers.common['Content-type'] = `multipart/form-data`;
    const { url, method, success, data, postProcessSuccess, postProcessError } = action.payload;

    axios({
        method,
        url: BASE_URL + url,
      //  headers: {'Content-type': 'multipart/form-data'},
        data: data ? data : null
    }).then((response) => {
        dispatch({ type: constants.TOGGLE_LOADER });
        if (success) dispatch(success(response.data));
       
        if (postProcessSuccess) postProcessSuccess(response.data);

    }).catch(err => {
        dispatch({ type: constants.TOGGLE_LOADER });
        if (!err.response) console.warn(err);
        else {
            if (err.response && err.response.status === 403)
                dispatch(logoutUser());
            if (err.response.data.message) {
                if (postProcessError) postProcessError(err.response.data.message);
            }
        }
    })
};