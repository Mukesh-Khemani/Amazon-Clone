import React from 'react'
import  './Header.css';
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
function Header() {
    return <nav className="header">
    <Link to="/"> 
        <img className="header__logo" 
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
        alt="" />
    </Link>


    <div className="header__search">
        <input type="text" className="header__searchInput"/>
        <SearchIcon className="header__searchIcon" />
    </div>
    <div className="header__nav">
        <Link to="/login" className="header__link">
            <div className="header__option">
                <p className="header__optionLineOne">Hello!!</p>
                <p className="header__optionLineTwo">Sign In</p>
            </div>
        </Link>
        <Link to="/" className="header__link">
            <div className="header__option">
                <p className="header__optionLineOne">Returns</p>
                <p className="header__optionLineTwo"> & Orders</p>
            </div>
        </Link>
        <Link to="/" className="header__link">
            <div className="header__option">
                <p className="header__optionLineOne">Your</p>
                <p className="header__optionLineTwo">Prime</p>
            </div>
        </Link>

    </div>

    </nav>
}

export default Header
