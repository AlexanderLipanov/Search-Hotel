import { put, takeEvery, all, } from 'redux-saga/effects';


export const FETCH_HOTELS = 'FETCH_HOTELS';
export const baseURL = 'https://engine.hotellook.com/api/v2/cache.json';

/** функция запроса на сервер с введенными данными */


async function GetHotels(fetchParams) {
    const request = await fetch(`${baseURL}?location=${fetchParams.params.location}&currency=rub&checkIn=${fetchParams.params.checkIn}&checkOut=${fetchParams.params.checkOut}&limit=10`);
    const data = await request.json();
    return data;
}

function* fetchHotels(fetchParams) {
    try {
        const Hotels = yield GetHotels(fetchParams);
        yield put({type: 'SET_HOTELS_PAYLOAD', payload: Hotels});
    } catch (error) {
        yield put({type: 'FETCH_FAILED', error});
    }
}

function* hotelsWatcher() {
    yield takeEvery('FETCH_HOTELS',fetchHotels);

}


export default function* rootWatcher() {
    yield all([hotelsWatcher()])
}