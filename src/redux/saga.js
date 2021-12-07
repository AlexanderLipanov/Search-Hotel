import { call, put, takeEvery, all, take } from 'redux-saga/effects';


export const FETCH_HOTELS = 'FETCH_HOTELS';
const baseURL = 'http://engine.hotellook.com/api/v2/cache.json';


async function GetHotels(fetchParams) {
    console.log(fetchParams, 'hi from saga');
    const request = await fetch(`${baseURL}?location=${fetchParams.params.location}&currency=rub&checkIn=${fetchParams.params.checkIn}&checkOut=${fetchParams.params.checkOut}&limit=10`);
    const data = await request.json();
    console.log(request);
    return data;
}

function* fetchHotels(fetchParams) {
    const Hotels = yield GetHotels(fetchParams);
    yield put({type: 'SET_HOTELS_PAYLOAD', payload: Hotels});
    console.log(Hotels, 'FetchHotels');    
}

function* hotelsWatcher() {
    yield takeEvery('FETCH_HOTELS',fetchHotels);

}


export default function* rootWatcher() {
    yield all([hotelsWatcher()])
}