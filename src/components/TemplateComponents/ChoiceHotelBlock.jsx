import React from "react";
import Arrow from '../../svg/VectorArrow.svg';
import './ChoiceHotelBlock.css';
import ChoiceHotelCard from "./ChoiceHotelCard";
import { connect } from "react-redux";
import {addFavoriteHotel} from '../../redux/actions/actionCreatore';
import MySwiper from './Swiper';


class ChoiceHotelBlock extends React.Component {


    render() {
        
        const {addFavoriteHotel} = this.props;
        this.CurrentFavorite = this.props.FavoriteHotels.length.toString();
        this.HotelsChoice = this.props.Hotels.map( (item) => <ChoiceHotelCard addFavoriteHotel={this.props.addFavoriteHotel} 
                                                    checkIn={this.props.checkIn} checkOut={this.props.checkOut}
                                                    HotelName={item.hotelName} id={item.hotelId} key={item.hotelId}
                                                    rating={item.stars}  Price={item.priceFrom} /> );


        return (
            <div className="choiceHotelBlock">
                <div className="choiceHotelBlockContainer">
                    <div className="choiceTitlesBlock">
                        <div className="openLinks">
                            <h1 className="hotels">Отели</h1>
                            <img src={Arrow} alt="" className="arrow" />
                            <h2 className="City">Москва</h2>
                        </div>
                            <p className="choiceDate">07 июля 2020</p>
                    </div>
                    <div className="swiperBlock">
                    <MySwiper SwiperSlides={this.props.SwiperSlides} />
                    </div>
                    <div className="addedToFavoritesBlock">
                        <p className="added">Добавлено в Избранное:</p>
                        <p className="quantilyHotel"><span className="numberHotel" > {this.CurrentFavorite} </span> отеля</p>
                    </div>
                    <div className="listChoiceHotelsBlock">
                        <div className="listChoiceHotels">
                            <div className="listChoiceHotelsBlockScroll">
                                {this.HotelsChoice}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

let mapStateToProps = (state) => {

    return {
        Hotels: state.choiceReducer.Hotels,
        FavoriteHotels: state.choiceReducer.FavoriteHotels,
        checkIn: state.searchReducer.checkIn,
        checkOut: state.searchReducer.checkOut,
        SwiperSlides: state.choiceReducer.SwiperSlides,
    }
}

export default connect( mapStateToProps, {addFavoriteHotel})(ChoiceHotelBlock);




