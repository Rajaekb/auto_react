import * as constants from './../constants';

export default function annoncesReducer(state = [], action) {
    switch (action.type) {
        case constants.SET_ALL_ANNONCES:
            return action.payload;
        case constants.ADD_ANNONCE:
            return state.concat(action.payload);
        /*case constants.SEARCH_ANNONCE:
            return state.concat(action.payload);*/
        case constants.REMOVE_ANNONCE:
            return state.filter(item => item._id !== action.payload);
        case constants.UPDATE_ANNONCE:
            return state.map(item => {
                if (item._id === action.payload.annonceId)
                    return { ...item, ...action.payload.data };
                else
                    return item;
            });
        case constants.RESET_USER_INFO:
            return [];
        default:
            return state;
    }
}