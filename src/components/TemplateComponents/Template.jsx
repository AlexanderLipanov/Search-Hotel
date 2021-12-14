import React from "react";
import './Template.css';
import LogOut from '../../svg/logOut.svg';
import SearchBlock from './SearchBlock';
import FavoritesBlock from "./FavoritesBlock";
import ChoiceHotelBlock from "./ChoiceHotelBlock";
import {logOut} from '../../redux/actions/actionCreatore';
import {connect} from 'react-redux';
import {Navigate} from 'react-router-dom';
import Cookies from 'js-cookie';


class Template extends React.Component {

    /* logOut - выполняет вход в приложение */

    logOut = () => {    

        Cookies.remove('password');
        Cookies.remove('email');
        this.props.logOut();
    }    

    render() {
        
        /* проверка на логинизацию */

        if (this.props.isLogIn === null) {
            return <Navigate to='/' />;
        } 

        /* количество отелей в разделе избранное */

        this.CurrentFavorite = this.props.FavoriteHotels.length;

        /* трансформируем даты в удобный формат */

        this.checkInPresentation = new Date(this.props.checkInCard)
            .toLocaleString('en-GB', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
            });

        this.checkInPresentationChoice = new Date(this.props.checkInCard)
            .toLocaleString('ru', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
            });

        return (
            <div className="template">
                <div className="templateContainer">
                    <div className="templateHeader">
                        <h1 className="applicationName">
                        Simple Hotel Check
                        </h1>
                        <button onClick={ () => this.logOut() } className="logOut">
                        Выйти   <img src={LogOut} alt="#" />
                        </button>
                    </div>
                    <div className="templateMain">
                        <div className="templateLeft">
                            <SearchBlock />
                            <FavoritesBlock 
                            FavoriteHotels={this.props.FavoriteHotels} 
                            sortActiveClassRating={this.props.sortActiveClassRating}
                            sortActiveClassPrice={this.props.sortActiveClassPrice} />
                        </div>
                        <div className="templateRight">
                            <ChoiceHotelBlock
                            checkInPresentationChoice={this.checkInPresentationChoice}
                            checkInPresentation={this.checkInPresentation}
                            location={this.props.location}
                            checkIn={this.props.checkIn}
                            checkOut={this.props.checkOut}
                            Hotels={this.props.Hotels}
                            CurrentFavorite={this.CurrentFavorite} 
                            SwiperSlides={this.props.SwiperSlides} 
                            checkOutCard={this.props.checkOutCard} 
                            error={this.props.error}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {

    return {
        isLogIn: state.loginReducer.isLogIn,
        Hotels: state.choiceReducer.Hotels,
        FavoriteHotels: state.choiceReducer.FavoriteHotels,
        SwiperSlides: state.choiceReducer.SwiperSlides,
        location: state.searchReducer.location,
        checkIn: state.searchReducer.checkIn,
        checkOut: state.searchReducer.checkOut,
        checkInCard: state.searchReducer.checkInCard,
        checkOutCard: state.searchReducer.checkOutCard,
        sortActiveClassRating: state.choiceReducer.sortActiveClassRating,
        sortActiveClassPrice:  state.choiceReducer.sortActiveClassPrice,
        error: state.choiceReducer.error,
        emailInputCookie: state.loginReducer.emailInputCookie,
        passwordInputCookie: state.loginReducer.passwordInputCookie,
    }
}

export default connect (mapStateToProps, {logOut})(Template);