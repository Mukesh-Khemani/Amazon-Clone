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
            <Product
            id="1234567"
            title="Mark Twain "
            price={12.00}
            rating={4.4}
            image="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.in%2FGreatest-Novels-Twain-Deluxe-Hardbound%2Fdp%2F9388810457&psig=AOvVaw3uTkxxvwL4fPCNdSV65Z8I&ust=1629829203198000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIjFzonhx_ICFQAAAAAdAAAAABAD"
            />
        </div>
    );
}

export default  Home;
