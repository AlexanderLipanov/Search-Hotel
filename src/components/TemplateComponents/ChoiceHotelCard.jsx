import React from "react";
import './ChoiceHotelCard.css';
import House from '../../svg/house.png';
import FavoriteMark from '../../svg/Vector.svg';
import GoldStar from '../../svg/Vector_star.svg';
import GreyStar from '../../svg/Vectornostar.png';

const ChoiceHotelCard = (props) => {

    console.log(props, 'choiceHotelCard');

    let rating = props.rating;
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
    let greyStarRating = greyStarArr.map( (item,index) => <img src={GreyStar} id={index} key={index}  className="greyStar" /> );

    console.log(goldStarArr);
    console.log(rating);

    return (
        <div id={props.id} className="ChoiceHotelCard">
            <div className="ChoiceHouseBlock">
                <img src={House} alt="" className="houseImage" />
            </div>
            <div className="rightSideChoiceCard">
            <div className="HotelChoiceCardContainer">
                <div className="headerChoiceCard">
                    <h2 className="hotelChoiceName">{props.HotelName}</h2>
                    <button onClick={ () => props.addFavoriteHotel(props.id)} className="ChoiceMarkButton" ><img src={FavoriteMark} alt="" className="ChoiceMark" /></button>
                </div>
                <div className="selectedReservationChoice">
                    <div className="reservationChoiceContainer">
                        <p className="reservationChoiceDate">{props.checkIn}</p>
                        <p className="totalChoiceDays">{props.checkOut}</p>
                    </div>
                </div>
                <div className="ChoiceRaitingAndPrice">
                    <div className="ChoiceRaiting">
                        {goldStarRating}
                        {greyStarRating}
                    </div>
                    <p className="ChoicePrice"><span>Price:</span>{props.Price}</p>
                </div>
            </div>
            </div>
        </div>
    );
}

export default ChoiceHotelCard;