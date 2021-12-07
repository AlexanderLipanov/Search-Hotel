import './SearchBlock.css'
import Calendar from '../../svg/calendar-today.svg';
import {useDispatch} from 'react-redux';

const SearchBlockPresentation = (props) => {

    const dispatch = useDispatch(props.location);

    console.log(props,'propsSearch');

    let fetchParams = {
        location: props.location,
        checkIn: props.checkIn,
        checkOut: props.checkOut,
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
                            <input onChange={ (e) => props.dateInput(e.target.value)} value={props.checkIn} type="date" className="dateInput" />
                                <button className="openCalendar"></button>
                        </div>
                    </div>
                    <div className="numberOfDaysBlock">
                        <h4 className="nameBlock">Количество дней</h4>
                        <div className="numberOfDaysInputBlock">
                            <input onChange={ (e) => props.qualintyDaysInput(e.target.value)}
                            value={props.checkOut} type="date" className="numberOfDaysInput" />
                        </div>
                    </div>

                    <button onClick={() => dispatch({type: 'FETCH_HOTELS', params: fetchParams})}  className="searchHotel">Искать</button>
                </div>
            </div>
    );
}

export default SearchBlockPresentation;