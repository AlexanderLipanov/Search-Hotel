import React from 'react';
import './FavoritesBlock.css';
import HotelFavoriteCard from './HotelFavoriteCard';
import { connect } from 'react-redux';
import { removeFavoriteHotel, sortPriceHigh, 
        sortRatingHigh, sortPriceLow,
        sortRatingLow,} from '../../redux/actions/actionCreatore';

class FavoritesBlock extends React.Component{
    
    constructor(props) {
        super(props);
    }

    render() {

        this.FavoriteHotels = this.props.FavoriteHotels.map( item => <HotelFavoriteCard 
                                        checkInPresentation={item.checkInPresentation} 
                                        removeFavoriteHotel={this.props.removeFavoriteHotel} 
                                        checkOutFavoriteCard={item.checkOutCard}
                                        HotelName={item.HotelName} 
                                        id={item.id} key={item.id}
                                        stars={item.rating} price={item.price} /> );

        /** проверяем в какую сторону отсортирован массив избранных отелей по прайсу */

        for (let i = 0; i < this.props.FavoriteHotels.length-1; i++) {
            if ((this.props.FavoriteHotels[i].price - this.props.FavoriteHotels[i + 1].price) > 0) {
                this.sortedPrice = true;
            } else {
                this.sortedPrice = false;   
            }
        }

        /** проверяем в какую сторону отсортирован массив избранных отелей по рейтингу */

        for (let i = 0; i < this.props.FavoriteHotels.length-1; i++) {
            if ((this.props.FavoriteHotels[i].rating - this.props.FavoriteHotels[i + 1].rating) > 0) {
                this.sortedRating = true;
            } else {
                this.sortedRating = false;   
            }
        }       

        return (
            <div className="favoritesBlock">
                <div className="favoritesContainer">
                    <div className="favoritesHeader">
                        <h4 className="titleBlock">
                            Избранное
                        </h4>
                        <div className="buttonSortContainer">

                            { this.sortedRating 
                            ? <button className={"sortRating_Low" + `${this.props.sortActiveClassRating}`} onClick={ () => this.props.sortRatingLow() } >Рейтинг 
                            <div className="selectedBlockRating">
                                <div className="selectedTopRating_Low"><span></span><span></span></div>
                                <div className="selectedBottomRating_Low"><span></span><span></span></div>
                            </div>
                            </button>

                            : <button className={"sortRating_High" + `${this.props.sortActiveClassRating}`} onClick={ () => this.props.sortRatingHigh() } >Рейтинг 
                            <div className="selectedBlockRating">
                                <div className="selectedTopRating_High"><span></span><span></span></div>
                                <div className="selectedBottomRating_High"><span></span><span></span></div>
                            </div>
                            </button>  
                            }
                            
                            { this.sortedPrice
                            ? <button className={"sortPrice_Low" + `${this.props.sortActiveClassPrice}`} onClick={ () => this.props.sortPriceLow() } >Цена
                            <div className="selectedBlockPrice">
                                <div className="selectedTopPrice_Low"><span></span><span></span></div>
                                <div className="selectedBottomPrice_Low"><span></span><span></span></div>
                            </div>
                            </button> 

                            : <button className={"sortPrice_High" + `${this.props.sortActiveClassPrice}`} onClick={ () => this.props.sortPriceHigh() } >Цена
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

export default connect(null, {  removeFavoriteHotel, 
                                sortPriceHigh, sortRatingHigh, 
                                sortPriceLow, sortRatingLow })(FavoritesBlock);