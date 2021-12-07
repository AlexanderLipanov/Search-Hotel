import React from "react";
import './Template.css';
import LogOut from '../../svg/logOut.svg';
import SearchBlock from './SearchBlock';
import FavoritesBlock from "./FavoritesBlock";
import ChoiceHotelBlock from "./ChoiceHotelBlock";

export default class Template extends React.Component {

    render() {

        return (
            <div className="template">
                <div className="templateContainer">
                    <div className="templateHeader">
                        <h1 className="applicationName">
                        Simple Hotel Check
                        </h1>
                        <button className="logOut">
                        Выйти   <img src={LogOut} alt="#" />
                        </button>
                    </div>
                    <div className="templateMain">
                        <div className="templateLeft">
                            <SearchBlock />
                            <FavoritesBlock />
                        </div>
                        <div className="templateRight">
                            <ChoiceHotelBlock />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}