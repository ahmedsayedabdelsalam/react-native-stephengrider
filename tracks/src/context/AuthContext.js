import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import AsyncStorage from "@react-native-async-storage/async-storage"
import {navigate} from "../navigationRef";

const authReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ERROR':
            return {...state, errorMessage: action.payload};
        case 'SIGNIN':
            return {errorMessage: '', token: action.payload};
        case 'CLEAR_ERROR_MESSAGE':
            return {...state, errorMessage: ''};
        case 'SIGNOUT':
            return {token: null, errorMessage: ''};
        default:
            return state;
    }
};

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');

    if (token) {
        dispatch({type: 'SIGNIN', payload: token});
        navigate('TrackList');
    } else {
        navigate('Signup');
    }
}

const clearErrorMessage = dispatch => () => dispatch({type: 'CLEAR_ERROR_MESSAGE'});

const signup = (dispatch) => async ({email, password}) => {
    try {
        const res = await trackerApi.post('/signup', {email, password});

        await AsyncStorage.setItem('token', res.data.token);

        dispatch({type: 'SIGNIN', payload: res.data.token})

        navigate('TrackList');
    } catch (err) {
        dispatch({type: 'ADD_ERROR', payload: 'something went wrong with sign up'});
    }
}


const signin = (dispatch) => async ({email, password}) => {
    try {
        const res = await trackerApi.post('/signin', {email, password});

        await AsyncStorage.setItem('token', res.data.token);

        dispatch({type: 'SIGNIN', payload: res.data.token})

        navigate('TrackList');
    } catch (err) {
        dispatch({type: 'ADD_ERROR', payload: 'something went wrong with sign in'});
    }
}


const signout = (dispatch) => async () => {
    await AsyncStorage.removeItem('token');
    dispatch({type: 'SIGNOUT'});
    navigate('loginFlow');
}


export const {Provider, Context} = createDataContext(
    authReducer,
    {
        signup,
        signin,
        signout,
        clearErrorMessage,
        tryLocalSignin
    },
    {token: null, errorMessage: ''}
)