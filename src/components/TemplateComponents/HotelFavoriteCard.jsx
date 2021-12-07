import React from "react";
import './HotelFavoriteCard.css';
import FavoriteMark from '../../svg/Vector.svg';
import GoldStar from '../../svg/Vector_star.svg';
import GreyStar from '../../svg/Vectornostar.png';

const HotelFavoriteCard = (props) => {

    console.log(props, 'hotelFavoriteCard');
    let rating = props.stars;
    let goldStarArr = [];
    let greyStarArr = [];
    let goldItem = {item: '*', id: '',};
    let greyItem = {item: '*', id: '',};

    for(let i = 0; i < rating; i++) {
        goldStarArr.push(goldItem);
    }

    for(let i = 0; i < 5 - rating; i++) {
        greyStarArr.push(greyItem);
    }

    let goldStarRating = goldStarArr.map( (item,index) => <img src={GoldStar} id={index} key={index} className="goldStar" /> );
    let greyStarRating = greyStarArr.map( (item,index) => <img src={GreyStar} id={index} key={index} className="greyStar" /> );


    return (
        <div id={props.id} className="HotelFavoriteCard">
            <div className="HotelFavoriteCardContainer">
                <div className="headerFavoriteCard">
                    <h2 className="hotelFavoriteName">{props.HotelName}</h2>
                    <button onClick={() => props.removeFavoriteHotel(props.id)} className="favoriteMarkButton"><img src={FavoriteMark} alt="" className="favoriteMark" /></button>
                </div>
                <div className="selectedReservation">
                    <div className="reservationContainer">
                        <p className="reservationDate">{props.checkIn}</p>
                        <p className="totalDays"> {props.checkOut}</p>
                    </div>
                </div>
                <div className="RaitingAndPrice">
                    <div className="Raiting">
                        {goldStarRating}
                        {greyStarRating}
                    </div>
                    <p className="price"><span>Price:</span>{props.Price}</p>
                </div>
            </div>
        </div>
    );
}

export default HotelFavoriteCard;