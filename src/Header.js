import React from 'react'
import  './Header.css';
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    const [ {basket, user} ]=useStateValue();
    const login=() => {
        if(user){
            auth.signOut();
        }
    }
    const logout=() => {
       auth.signOut();
    }
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
        <Link to={ !user && "/login" } className="header__link">
            <div className="header__option">
                <p className="header__optionLineOne">Hello{user?.email}</p>
                <p className="header__optionLineTwo">{user ? <p onClick={logout}>Sign Out</p>:'Sign In' }</p>
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
        <Link to="/checkout" className="header__link">
            <div className="header__optionBasket">
                <ShoppingBasketIcon />
                <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
            </div>

        </Link>

    </div>

    </nav>
}

export default Header
