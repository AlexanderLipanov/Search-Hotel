import {FETCH_HOTELS} from '../saga';
import {SET_HOTELS_DID_MOUNT} from './choiceReducer';

export const INPUT_LOCATION = 'INPUT_LOCATION';
export const INPUT_DATE = 'INPUT_DATE';
export const INPUT_CHECK_OUT = 'INPUT_CHECK_OUT';
export const TODAY = 'TODAY';
export const CLEAR_INPUT = 'CLEAR_INPUT';

let intialState = {
    location: 'Moscow',
    checkIn: new Date()
        .toLocaleString('ru', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
        }).split('.').reverse().join('-'),
    checkOut: 1,
    minSearchDate: '',
    checkInCard: '',
    checkOutCard: 1,
    checkInFavoriteCard: '',
    checkOutFavoriteCard: 1,
}

const searchReducer = (state = intialState, { type, location, checkIn, checkOut}) =>
    {
    switch(type) {  

        case SET_HOTELS_DID_MOUNT: // записываем даты для найденных отелей при монтировании комопнента
            return {
                ...state,
                checkInCard: state.checkIn,
                checkOutCard: state.checkOut,
            }

        case FETCH_HOTELS: // записываем даты для найденных отелей
            return {...state,
                checkInCard: state.checkIn,
                checkOutCard: state.checkOut,
            };

        case INPUT_LOCATION: // записываем location в state
            return {
                ...state,
                location: location,
            };   
        
        case INPUT_DATE: // записываем дату заезда в state
            return {
                ...state,
                checkIn: checkIn,
            };

        case INPUT_CHECK_OUT: // записываем день выезда в state      
            return {
                ...state,
                checkOut: checkOut,
            };      

        case TODAY: // устанавливаем сегодняшнюю дату для минимальной даты календаря
            return {
                ...state,
                minSearchDate:  new Date()
                    .toLocaleString('ru', {
                    year: 'numeric',
                    month: 'numeric',
                    day: 'numeric',
                }).split('.').reverse().join('-'),
            };

        default: return state;
    }
}

export default searchReducer;