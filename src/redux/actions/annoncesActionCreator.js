import * as constants from './../constants';

export const fetchAllAnnonces = () => ({
    type: constants.API,
    payload: {
        method: 'GET',
        url: '/api/annonces',
        success: (response) => (setAllAnnonces(response))
    }
});

export const createAnnonce = (data, onSuccess, onError) => ({
    type: constants.API,
    payload: {
        method: 'POST',
        url: '/api/annonces',
        data,
        success: (annonce) => (addAnnonce(annonce)),
        postProcessSuccess: onSuccess,
        postProcessError: onError
    }
});

const addAnnonce = (annonce) => ({
    type: constants.ADD_ANNONCE,
    payload: annonce
});

const setAllAnnonces = (data) => ({
    type: constants.SET_ALL_ANNONCES,
    payload: data
});