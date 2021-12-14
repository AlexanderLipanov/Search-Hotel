import React from 'react';
import './SearchBlock.css'
import {useDispatch} from 'react-redux';

const SearchBlockPresentation = (props) => {

    console.log(props);

    const dispatch = useDispatch(props.location);

    /** создаем дату выезда для отправки запроса на сервер */

    let checkInDate = new Date (props.checkIn);
    let days = + checkInDate.getDate();
    let weekEndDays = days + (+ props.checkOut);
    let checkOutDate = new Date (checkInDate.setDate(weekEndDays))
        .toLocaleString('ru', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
        }).split('.').reverse().join('-');

    /** параметры запроса на сервер */

    let fetchParams = {
        location: props.location,
        checkIn: props.checkIn,
        checkOut: checkOutDate,
    }

    return (
        <div className="searchBlock">
                <div className="searchContainer">
                    <div className="locationBlock">
                        <h4 className="nameBlock">Локация</h4>
                        <div className="locationInputBlock">
                            <input onChange={ (e) => props.locationInput(e.target.value)}
                            value={props.location} type="text" className="locationInput" />
                        </div>
                    </div>
                    <div className="dateBlock">
                        <h4 className="nameBlock">Дата заселения</h4>
                        <div className="dateInputBlock">
                            <input onChange={ (e) => props.dateInput(e.target.value)} 
                                value={props.checkIn} min={props.minSearchDate} 
                                type="date" className="dateInput" />
                        </div>
                    </div>
                    <div className="numberOfDaysBlock">
                        <h4 className="nameBlock">Количество дней</h4>
                        <div className="numberOfDaysInputBlock">
                            <input onChange={ (e) => props.qualintyDaysInput(e.target.value)}
                                value={props.checkOut} type="number" 
                                className="numberOfDaysInput" />
                        </div>
                    </div>

                    <button onClick={() => dispatch({type: 'FETCH_HOTELS', params: fetchParams})}  
                        className="searchHotel">Искать</button>
                </div>
            </div>
    );
}

export default SearchBlockPresentation;