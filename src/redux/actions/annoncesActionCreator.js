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
        headers:{
            'Content-Type':'multipart/form-data'
        },
        postProcessSuccess: onSuccess,
        postProcessError: onError
    }
});

export const  getAnnonceById=(annonceId,onSuccess)=>({
    type:constants.API,
    payload:{
        method:'GET',
        url:`/api/annonces/${annonceId}`,
        postProcessSuccess:onSuccess

    }
});

export const updateAnnonceById = (annonceId,data,onSuccess,onError) => ({
    type:constants.API,
    payload: {
        method:'PUT',
        url:`/api/annonces/${annonceId}`,
        data,
        success:(annonceId,data) => (updateAnnonce(annonceId,data)),
        postProcessSuccess : onSuccess,
        postProcessError: onError
    }

});

export const deleteAnnonceById = (annonceId, onSuccess, onError) => ({
    type: constants.API,
    payload: {
        method: 'DELETE',
        url: `/api/annonces/${annonceId}`,
        success: () => (removeAnnonce(annonceId)),
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

const updateAnnonce = (annonceId,data) => ({
    type : constants.UPDATE_ANNONCE,
    payload:{annonceId,data}
});

const removeAnnonce = (annonceId) => ({
    type: constants.REMOVE_ANNONCE,
    payload: annonceId
});