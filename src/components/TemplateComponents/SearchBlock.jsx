import React from 'react';
import { connect } from 'react-redux';
import SearchBlockPresentation from './SearchBlockPresentation';
import {inputLocation, inputDate, inputQuantilyDays} from '../../redux/actions/actionCreatore';

class SearchBlock extends React.Component {


    locationInput = (location) => {
        
        this.props.inputLocation(location);
    }

    dateInput = (date) => {

        this.props.inputDate(date);
    }

    qualintyDaysInput = (checkOut) => {
        
        this.props.inputQuantilyDays(checkOut);
    }

    render() {
            
        return (
            <SearchBlockPresentation  location={this.props.location}
            checkIn={this.props.checkIn} checkOut={this.props.checkOut}
            locationInput={this.locationInput} dateInput={this.dateInput}
            qualintyDaysInput={this.qualintyDaysInput} 
            minSearchDate={this.props.minSearchDate} />
        );
    }    
}

let mapStateToProps = (state) => {

    return {
        location: state.searchReducer.location, 
        checkIn: state.searchReducer.checkIn,
        minSearchDate: state.searchReducer.minSearchDate,
        checkOut: state.searchReducer.checkOut,
    }
}

export default connect( mapStateToProps,{inputLocation, inputDate, inputQuantilyDays})(SearchBlock);