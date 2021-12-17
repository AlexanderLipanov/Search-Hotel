import React from "react";
import Arrow from '../../svg/VectorArrow.svg';
import './ChoiceHotelBlock.css';
import ChoiceHotelCard from "./ChoiceHotelCard";
import { connect } from "react-redux";
import {addFavoriteHotel, setHotelsDidMoutn} from '../../redux/actions/actionCreatore';
import MySwiper from './Swiper';
import { baseURL } from "../../redux/saga";

class ChoiceHotelBlock extends React.Component {

    constructor(props) {
        super(props)

        /** создаем дату для запроса на сервер при монтировании компонента */

        this.checkInDate = new Date (this.props.checkIn);
        this.days = + this.checkInDate.getDate();
        this.weekEndDays = this.days + (+ this.props.checkOut);
        this.checkOutDate = new Date (this.checkInDate.setDate(this.weekEndDays))
        .toLocaleString('ru', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
        }).split('.').reverse().join('-');

        /** параметры для запроса на сервер при монтировании компонента */

        this.fetchParams = {
            location: this.props.location,
            checkIn: this.props.checkIn,
            checkOut: this.checkOutDate,
        }
    }

    componentDidMount() {

        /** запрашиваем данные отелей для данных поиска по умоляанию */
        
            fetch(`${baseURL}?location=${this.fetchParams.location}&currency=rub&checkIn=${this.fetchParams.checkIn}&checkOut=${this.fetchParams.checkOut}&limit=10`)
            .then( response => response.json())
            .then( response => this.props.setHotelsDidMoutn(response) );
    }
    
    render() {
        
        const {addFavoriteHotel} = this.props;
        
        this.HotelsChoice = this.props.Hotels.map( (item) => <ChoiceHotelCard checkInPresentation={this.props.checkInPresentation} addFavoriteHotel={this.props.addFavoriteHotel} 
                                                    HotelName={item.hotelName} id={item.hotelId} key={item.hotelId}
                                                    rating={item.stars}  Price={item.priceFrom} 
                                                    checkInCard={this.props.checkInCard} checkOutCard={this.props.checkOutCard} /> );                                        

        return (
            <div className="choiceHotelBlock">
                <div className="choiceHotelBlockContainer">
                    <div className="choiceTitlesBlock">
                        <div className="openLinks">
                            <h1 className="hotels">Отели</h1>
                            <img src={Arrow} alt="" className="arrow" />
                            <h2 className="City">Москва</h2>
                        </div>
                            <p className="choiceDate"> {this.props.checkInPresentationChoice} </p>
                    </div>
                    <div className="swiperBlock">
                    <MySwiper SwiperSlides={this.props.SwiperSlides} />
                    </div>
                    <div className="addedToFavoritesBlock">
                        <p className="added">Добавлено в Избранное:</p>
                        <p className="quantilyHotel"><span className="numberHotel" >
                            {this.props.CurrentFavorite} 
                    </span>{this.props.CurrentFavorite === 0 
                                ? <span className="inclination"> отелей</span> : null}
                            {this.props.CurrentFavorite === 1 
                                ? <span className="inclination"> отель</span> : null}
                            {this.props.CurrentFavorite > 1 && this.props.CurrentFavorite < 5
                                ? <span className="inclination"> отеля</span> : null}
                            {this.props.CurrentFavorite > 4 
                                ? <span className="inclination"> отелей</span> : null} </p>
                    </div>
                    <div className="listChoiceHotelsBlock">
                        <p className="error"> {this.props.error} </p>
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

export default connect( null, {addFavoriteHotel, setHotelsDidMoutn,})(ChoiceHotelBlock);




