
import Slide2 from '../../image/2757b14c0680924208c33f286eab4c46.jpg';
import Slide3 from '../../image/325550662.jpg';
import Slide4 from '../../image/Azimut_Hotel_Olympic.jpg';
import Slide5 from '../../image/elit-life-hotel.jpg';
import {FETCH_HOTELS} from '../saga';


export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export const SET_HOTELS_PAYLOAD = 'SET_HOTELS_PAYLOAD';
export const SORT_PRICE_HIGH = 'SORT_PRICE_HIGH';
export const SORT_RATING_HIGH = 'SORT_RATING_HIGH';
export const SORT_PRICE_LOW = 'SORT_PRICE_LOW';
export const SORT_RATING_LOW = 'SORT_RATING_LOW';
export const SET_HOTELS_DID_MOUNT = 'SET_HOTELS_DID_MOUNT'; 
export const FETCH_FAILED = 'FETCH_FAILED';


let intialState = {
    Hotels: [],
    FavoriteHotels: [],
    SwiperSlides: [
        { image: Slide2, id: 2},
        { image: Slide3, id: 3},
        { image: Slide4, id: 4},
        { image: Slide5, id: 5},
    ],
    sortActiveClassRating: '',
    sortActiveClassPrice: '',
    error: '',
}


const choiceReducer = (state = intialState, { type, id, payload, FavoriteItem, response}) =>
    {
    switch(type) {  

        case ADD_FAVORITE: // добавляем в избранное

        let copyStateADD = {...state};
            copyStateADD.Hotels = [...state.Hotels];
            copyStateADD.FavoriteHotels = [...state.FavoriteHotels];
            FavoriteItem = {...FavoriteItem};

        /** проверка на дубликат отеля, чтобы нельзя было добавить одну и ту же карточку */

        let adjectiveItem = copyStateADD.FavoriteHotels
                .findIndex(item => (item.checkInPresentation === FavoriteItem.checkInPresentation) 
                            && (item.checkOutCard === FavoriteItem.checkOutCard) 
                            && (item.HotelName === FavoriteItem.HotelName)
                            && (item.price === FavoriteItem.price));

        /** условие при которых удаляется повторяющаяся добавляющееся карточка */
                            
            if ( copyStateADD.FavoriteHotels.find(item => (item.checkInPresentation === FavoriteItem.checkInPresentation) 
            && (item.checkOutCard === FavoriteItem.checkOutCard) 
            && (item.HotelName === FavoriteItem.HotelName)
            && (item.price === FavoriteItem.price))) {
                copyStateADD.FavoriteHotels.splice(adjectiveItem, 1);
            }

        /** для того чтобы добавить один и тот же отель с разными данными */

        let randomID = Math.random();
            if ( copyStateADD.FavoriteHotels.find(item => item.id === FavoriteItem.id) ) {
                FavoriteItem.id = FavoriteItem.id + randomID;
            }

            copyStateADD.FavoriteHotels.push( FavoriteItem );
            copyStateADD.sortActiveClassRating = '';    
            copyStateADD.sortActiveClassPrice = '';  
            
            return copyStateADD;

        case REMOVE_FAVORITE: // удаляем из избранного

        let copyStateREMOVE = {...state};
            copyStateREMOVE.FavoriteHotels = [...state.FavoriteHotels];
            FavoriteItem = {...FavoriteItem};

        /** ищем отель, который хотим удалить */
            
        let deleteItem = copyStateREMOVE.FavoriteHotels
                .findIndex(item => item.id === id);

        /** удаляем */
                
            copyStateREMOVE.FavoriteHotels.splice(deleteItem, 1);
            copyStateREMOVE.sortActiveClassRating = '';    
            copyStateREMOVE.sortActiveClassPrice = '';  

            return copyStateREMOVE;    

        case SET_HOTELS_PAYLOAD: // записываем полученные данные отелей в наш массив
            return {
                ...state,
                Hotels : [
                    ...payload
                ],
                sortActiveClassPrice: '',
                sortActiveClassRating: '',
            };  

        case SORT_PRICE_HIGH: // сортируем список избранных отелей на увеличение по прайсу
            return {
                ...state,
                FavoriteHotels: [...state.FavoriteHotels.sort( (a,b) => b.price -a.price )],
                sortActiveClassPrice: '_active',
                sortActiveClassRating: '',
            }; 

        case SORT_RATING_HIGH: // сортируем список избранных отелей на увеличение по рейтингу
            return {
                ...state,
                FavoriteHotels: [...state.FavoriteHotels.sort( (a,b) => (b.rating+Math.random()) -(a.rating+Math.random()) )],
                sortActiveClassRating: '_active',
                sortActiveClassPrice: '',
            }; 
            
        case SORT_PRICE_LOW: // сортируем список избранных отелей на уменьшение по прайсу
            return {
                ...state,
                FavoriteHotels: [...state.FavoriteHotels.sort( (a,b) => a.price -b.price )],
                sortActiveClassPrice: '_active',
                sortActiveClassRating: '',
            }; 

        case SORT_RATING_LOW: // сортируем список избранных отелей на уменьшение по рейтингу
            return {
                ...state,
                FavoriteHotels: [...state.FavoriteHotels.sort( (a,b) => (a.rating+Math.random()) -(b.rating+Math.random()) )],
                sortActiveClassRating: '_active',
                sortActiveClassPrice: '',
            };     
        
        case SET_HOTELS_DID_MOUNT: // записываем полученные данные отелей в наш массив при монтировании компонента
            return {
                ...state,
                Hotels: [...response]
            }

        case FETCH_FAILED: // обработка получения ошибки с сервера
            return {
                ...state,
                error: 'Введите правильные данные для поиска',
                Hotels: [...state.Hotels.splice(0, state.Hotels.Length)]
            }    

        case FETCH_HOTELS: // при новом запросе убираем ошибку 
            return {
                ...state,
                error: '',
            }

        default: return state;
    }
}

export default choiceReducer;