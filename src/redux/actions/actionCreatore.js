import {
    ADD_FAVORITE, REMOVE_FAVORITE, SET_HOTELS_PAYLOAD, 
    SORT_PRICE_HIGH, SORT_RATING_HIGH,
    SORT_PRICE_LOW, SORT_RATING_LOW
    } from '../reducers/choiceReducer';
import {INPUT_LOCATION, INPUT_DATE, INPUT_CHECK_OUT} from '../reducers/searchReducer';

export const addFavoriteHotel = (id) => ({
    type: ADD_FAVORITE,
    id,
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











