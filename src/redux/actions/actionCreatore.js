import {
    ADD_FAVORITE, REMOVE_FAVORITE, SET_HOTELS_PAYLOAD, 
    SORT_PRICE_HIGH, SORT_RATING_HIGH,
    SORT_PRICE_LOW, SORT_RATING_LOW,
    SET_HOTELS_DID_MOUNT,
    } from '../reducers/choiceReducer';
import {INPUT_LOCATION, INPUT_DATE, INPUT_CHECK_OUT, TODAY} from '../reducers/searchReducer';
import {INPUT_EMAIL, INPUT_PASSWORD, SIGN_IN, LOG_OUT, LOG_IN_COOKIES} from '../reducers/loginReducer';

export const addFavoriteHotel = (FavoriteItem) => ({
    type: ADD_FAVORITE,
    FavoriteItem,
});

export const removeFavoriteHotel = (id) => ({
    type: REMOVE_FAVORITE,
    id,
});

export const inputLocation = (location) => ({
    type: INPUT_LOCATION,
    location,
});

export const inputDate = (checkIn) => ({
    type: INPUT_DATE,
    checkIn,
});

export const inputQuantilyDays = (checkOut) => ({
    type: INPUT_CHECK_OUT,
    checkOut,
});

export const setHotelsPayload = (payload) => ({
    type: SET_HOTELS_PAYLOAD,
    payload,
});

export const sortPriceHigh = () => ({
    type: SORT_PRICE_HIGH,
});

export const sortRatingHigh = () => ({
    type: SORT_RATING_HIGH,
});

export const sortPriceLow = () => ({
    type: SORT_PRICE_LOW,
});

export const sortRatingLow = () => ({
    type: SORT_RATING_LOW,
});

export const inputEmail = (email) => ({
    type: INPUT_EMAIL,
    email
});

export const inputPassword = (password) => ({
    type: INPUT_PASSWORD,
    password
});

export const signIn = () => ({
    type: SIGN_IN,
});

export const today = () => ({
    type: TODAY,
});

export const logOut = () => ({
    type: LOG_OUT,
});

export const setHotelsDidMoutn = (response) => ({
    type: SET_HOTELS_DID_MOUNT,
    response
});

export const logInCookies = () => ({
    type: LOG_IN_COOKIES,
});


















