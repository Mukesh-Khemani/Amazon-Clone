import React from 'react'
import "./Home.css"
import Product from "./Product"
function  Home() {
    return (
        <div className="home">
            <img 
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt=""
            /> 
            <div className="home__row">
                <Product
                id="1234567"
                title="The Adventures of Tom Sawyer:Mark Twain "
                price={10.50}
                rating={5}
                image="https://m.media-amazon.com/images/I/51ONaww2BhL.jpg"
                />
                <Product
                id="1234567"
                title="The Adventures of Tom Sawyer:Mark Twain "
                price={10.50}
                rating={5}
                image="https://m.media-amazon.com/images/I/51ONaww2BhL.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                id="1234567"
                title="The Adventures of Tom Sawyer:Mark Twain "
                price={10.50}
                rating={5}
                image="https://m.media-amazon.com/images/I/51ONaww2BhL.jpg"
                />
                <Product
                id="1234567"
                title="The Adventures of Tom Sawyer:Mark Twain "
                price={10.50}
                rating={5}
                image="https://m.media-amazon.com/images/I/51ONaww2BhL.jpg"
                />
                 <Product
                id="1234567"
                title="The Adventures of Tom Sawyer:Mark Twain "
                price={10.50}
                rating={5}
                image="https://m.media-amazon.com/images/I/51ONaww2BhL.jpg"
                />
            </div>
            <div classNmae="home__row">
                <Product
                id="1234567"
                title="The Adventures of Tom Sawyer:Mark Twain "
                price={10.50}
                rating={5}
                image="https://m.media-amazon.com/images/I/51ONaww2BhL.jpg"
                />
            </div>
        </div>
    );
}

export default  Home;
