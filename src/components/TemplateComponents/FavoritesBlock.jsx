import React from 'react';
import './FavoritesBlock.css';
import HotelFavoriteCard from './HotelFavoriteCard';
import { connect } from 'react-redux';
import { removeFavoriteHotel, sortPriceHigh, 
        sortRatingHigh, sortPriceLow,
        sortRatingLow,} from '../../redux/actions/actionCreatore';

class FavoritesBlock extends React.Component{

    
    render() {


        console.log(this.props, 'FavoriteBlock');

        const {removeFavoriteHotel, sortPriceHigh, sortRatingHigh} = this.props;

        this.FavoriteHotels = this.props.FavoriteHotels.map( item => <HotelFavoriteCard removeFavoriteHotel={this.props.removeFavoriteHotel} 
                                                                    checkIn={this.props.checkIn} checkOut={this.props.checkOut}
                                                                    HotelName={item.hotelName} id={item.hotelId} key={item.hotelId}
                                                                    ReservationDate={item.ReservationDate}  stars={item.stars}
                                                                    totalChoiceDays={item.totalChoiceDays} Price={item.priceFrom} /> )

        console.log(this.FavoriteHotels, 'FavoriteHotels');
        console.log(this.props.FavoriteHotels, 'ThisPropsFavoriteHotels');

        for (let i = 0; i < this.props.FavoriteHotels.length-1; i++) {
            if ((this.props.FavoriteHotels[i].priceFrom - this.props.FavoriteHotels[i + 1].priceFrom) > 0) {
                this.sortedPrice = true;
            } else {
                this.sortedPrice = false;   
            }
        }
        console.log(this.sortedPrice, 'sortedPrice');

        for (let i = 0; i < this.props.FavoriteHotels.length-1; i++) {
            if ((this.props.FavoriteHotels[i].stars - this.props.FavoriteHotels[i + 1].stars) > 0) {
                this.sortedRating = true;
            } else {
                this.sortedRating = false;   
            }
        }
        console.log(this.sortedRating, 'sortedRating');

        return (
            <div className="favoritesBlock">
                <div className="favoritesContainer">
                    <div className="favoritesHeader">
                        <h4 className="titleBlock">
                            Избранное
                        </h4>
                        <div className="buttonSortContainer">

                            { this.sortedRating 
                            ? <button className="sortRating_Low" onClick={ () => this.props.sortRatingLow() } >Рейтинг 
                            <div className="selectedBlockRating">
                                <div className="selectedTopRating_Low"><span></span><span></span></div>
                                <div className="selectedBottomRating_Low"><span></span><span></span></div>
                            </div>
                            </button>

                            : <button className="sortRating_High" onClick={ () => this.props.sortRatingHigh() } >Рейтинг 
                            <div className="selectedBlockRating">
                                <div className="selectedTopRating_High"><span></span><span></span></div>
                                <div className="selectedBottomRating_High"><span></span><span></span></div>
                            </div>
                            </button>  
                            }
                            
                            { this.sortedPrice
                            ? <button className="sortPrice_Low" onClick={ () => this.props.sortPriceLow() } >Цена
                            <div className="selectedBlockPrice">
                                <div className="selectedTopPrice_Low"><span></span><span></span></div>
                                <div className="selectedBottomPrice_Low"><span></span><span></span></div>
                            </div>
                            </button> 

                            : <button className="sortPrice_High" onClick={ () => this.props.sortPriceHigh() } >Цена
                            <div className="selectedBlockPrice">
                                <div className="selectedTopPrice_High"><span></span><span></span></div>
                                <div className="selectedBottomPrice_High"><span></span><span></span></div>
                            </div>
                            </button> 
                            }
                            
                        </div>
                        <div className="favoritesListBlock">
                                <div className="favoritesListScroll">
                                    <div className="favoritesListHidden">
                                        {this.FavoriteHotels}
                                    </div>
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
        FavoriteHotels: state.choiceReducer.FavoriteHotels,
        checkIn: state.searchReducer.checkIn,
        checkOut: state.searchReducer.checkOut,
    }
}

export default connect(mapStateToProps, {   removeFavoriteHotel, 
                                            sortPriceHigh, sortRatingHigh, 
                                            sortPriceLow, sortRatingLow })(FavoritesBlock);