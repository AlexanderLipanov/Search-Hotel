import React from 'react';
import { connect } from 'react-redux';
import SearchBlockPresentation from './SearchBlockPresentation';
import {inputLocation, inputDate, inputQuantilyDays, today} from '../../redux/actions/actionCreatore';


class SearchBlock extends React.Component {

    constructor(props) {
        super(props);

        /* получаем сегодняшний день для ограничения даты календаря */

        this.props.today();
    }

    /** ввод location */

    locationInput = (location) => {
        
        this.props.inputLocation(location);
    }

    /** ввод date */

    dateInput = (date) => {

        this.props.inputDate(date);
    }

    /** ввод количества дней проживания */

    qualintyDaysInput = (checkOut) => {
        
        this.props.inputQuantilyDays(checkOut);
    }

    render() {
        return (
            <SearchBlockPresentation  location={this.props.location}
            checkIn={this.props.checkIn} checkOut={this.props.checkOut}
            locationInput={this.locationInput} dateInput={this.dateInput}
            qualintyDaysInput={this.qualintyDaysInput} minSearchDate={this.props.minSearchDate} />
        );
    }    
}

let mapStateToProps = (state) => {

    return {
        location: state.searchReducer.location, 
        checkIn: state.searchReducer.checkIn,
        minSearchDate: state.searchReducer.minSearchDate,
        checkOut: state.searchReducer.checkOut,
        minSearchDate: state.searchReducer.minSearchDate,
    }
}

export default connect( mapStateToProps,{inputLocation, inputDate, inputQuantilyDays, today})(SearchBlock);