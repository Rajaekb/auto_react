import * as constants from './../constants';
//import jwt_decode from 'jwt-decode';

export const registerUser = (data, onSuccess, onError) => ({
    type:constants.API,
    payload:{
        method:'POST',
        url:'/api/register',
        data,
        success:(response) => (setUserInfo(response)),
        postProcessSuccess:onSuccess,
        postProcessError:onError
    }

});
export const loginUser =( data, onSuccess , onError)=>({
    type:constants.API,
    payload: {
        method:'POST',
        url:'/api/login',
        data,
        success:(response)=>(setUserInfo(response)),
        postProcessSuccess: onSuccess,
        postProcessError:onError
    }

});

export const logoutUser = () => {
    localStorage.removeItem('USER_INFO');
    return { type: constants.RESET_USER_INFO };
};


const setUserInfo = (data) => {
    //const parsedToken = JSON.parse(atob(data.token.split('.')[1]));
   //const parsedToken = jwt_decode(data.token);
   /* const userInfo = {
        userId:parsedToken.id,
        fullName:`${parsedToken.nom} ${parsedToken.prenom}`,
        token: data.token,
        isLoggedIn:true
        };*/
        const userInfo = {
            userId:data.data.id,
            nom:data.data.nom,
            prenom:data.data.prenom,
            tel:data.data.tel,
            adresse:data.data.adresse,
            ville:data.data.ville,
            token: data.token,
            isLoggedIn:true
            };
    localStorage.setItem('USER_INFO',JSON.stringify(userInfo));
    return { type: constants.SET_USER_INFO, payload : userInfo};
};
