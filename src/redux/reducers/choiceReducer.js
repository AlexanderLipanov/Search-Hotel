
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export const SET_HOTELS_PAYLOAD = 'SET_HOTELS_PAYLOAD';
export const SORT_PRICE_HIGH = 'SORT_PRICE_HIGH';
export const SORT_RATING_HIGH = 'SORT_RATING_HIGH';
export const SORT_PRICE_LOW = 'SORT_PRICE_LOW';
export const SORT_RATING_LOW = 'SORT_RATING_LOW';


let intialState = {
    Hotels: [],
    FavoriteHotels: [],
    SwiperSlides: [
        { image: 'src/image/Slide1.png', id: 1},
        { image: 'src/image/2757b14c0680924208c33f286eab4c46.jpg', id: 2},
        { image: 'src/image/325550662.jpg', id: 3},
        { image: 'src/image/Azimut_Hotel_Olympic.jpg', id: 4},
        { image: 'src/image/elit-life-hotel.jpg', id: 5},
        { image: 'src/image/Slide1.png', id: 6},
        { image: 'src/image/Rectangle24.png', id: 7},
        { image: 'src/image/Slide1.png', id: 8},
        { image: 'src/image/Rectangle28.png', id: 9},
    ],
}

const choiceReducer = (state = intialState, { type, id, payload}) =>
    {
    switch(type) {  

        case ADD_FAVORITE: 

            let copyStateADD = {...state};
            copyStateADD.Hotels = [...state.Hotels];
            copyStateADD.FavoriteHotels = [...state.FavoriteHotels.filter( item => item.hotelId.toString() !== id.toString() )];  
            copyStateADD.FavoriteHotels.push( copyStateADD.Hotels.find( item => item.hotelId.toString() === id.toString() ));    
            
            return copyStateADD;

        case REMOVE_FAVORITE: 

            let copyStateREMOVE = {...state};
            copyStateREMOVE.FavoriteHotels = [...state.FavoriteHotels];
            let deleteItem = copyStateREMOVE.FavoriteHotels.findIndex( item => item.hotelId.toString() === id.toString());
            copyStateREMOVE.FavoriteHotels.splice(deleteItem, 1);

            return copyStateREMOVE;    

        case SET_HOTELS_PAYLOAD: 
            return {
                ...state,
                Hotels : [
                    ...payload
                ]
            };  

        case SORT_PRICE_HIGH: 
            return {
                ...state,
                FavoriteHotels: [...state.FavoriteHotels.sort( (a,b) => b.priceFrom -a.priceFrom )]
            }; 

        case SORT_RATING_HIGH: 
            return {
                ...state,
                FavoriteHotels: [...state.FavoriteHotels.sort( (a,b) => b.stars -a.stars )]
            }; 
            
        case SORT_PRICE_LOW: 
            return {
                ...state,
                FavoriteHotels: [...state.FavoriteHotels.sort( (a,b) => a.priceFrom -b.priceFrom )]
            }; 

        case SORT_RATING_LOW:   
            return {
                ...state,
                FavoriteHotels: [...state.FavoriteHotels.sort( (a,b) => a.stars -b.stars )]
            };     

        default: return state;
    }
}

export default choiceReducer;