


export const INPUT_LOCATION = 'INPUT_LOCATION';
export const INPUT_DATE = 'INPUT_DATE';
export const INPUT_CHECK_OUT = 'INPUT_CHECK_OUT';


let minSearchDate = new Date().toLocaleString('ru', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
}).split('.').reverse().join('.');

console.log(minSearchDate);

let intialState = {
    location: '',
    checkIn: '',
    checkOut: '',
    minSearchDate: minSearchDate,
}

const searchReducer = (state = intialState, { type, location, checkIn, checkOut}) =>
    {
    switch(type) {  

        case INPUT_LOCATION: 
            return {
                ...state,
                location: location,
            };   
        
        case INPUT_DATE: 
            return {
                ...state,
                checkIn: checkIn,
            };

        case INPUT_CHECK_OUT:             
            return {
                ...state,
                checkOut: checkOut,
            };      

        default: return state;
    }
}

export default searchReducer;