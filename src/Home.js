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
                title="Apple AirPods with Wireless Charging Case "
                price={400}
                rating={4}
                image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MWP22?wid=1144&hei=1144&fmt=jpeg&qlt=80&.v=1591634795000"
                />
                <Product
                id="1234568"
                title="New Apple Watch Series 6 (GPS + Cellular, 40mm) - Product, RED - Aluminium Case with Product - Sport Band "
                price={120}
                rating={5}
                image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/44-alum-red-sport-productred-6s-cell?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1599811518000"
                />
            </div>
            <div className="home__row">
                <Product
                id="1234569"
                title="New Apple iPhone 12 (128GB) - White "
                price={1500.75}
                rating={4}
                image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-white-select-2020?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1604343705000"
                />
                <Product
                id="1234570"
                title="2020 Apple MacBook Pro (13.3-inch/33.78 cm, Apple M1 chip with 8‑core CPU and 8‑core GPU, 8GB RAM, 512GB SSD) - Silver "
                price={3000}
                rating={4}
                image="https://m.media-amazon.com/images/I/316Agzc-+UL._AC_SY580_.jpg"
                />
                 <Product
                id="1234571"
                title="2021 Apple iPad Pro with Apple M1 chip (11-inch/27.96 cm, Wi-Fi, 128GB) - Space Grey (3rd Generation) "
                price={1750}
                rating={4}
                image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-cell-spacegray-202104_FMT_WHH?wid=1945&hei=2000&fmt=jpeg&qlt=95&.v=1617126635000"
                />
            </div>
            <div classNmae="home__row">
                <Product
                id="1234572"
                title="Apple iMac with Retina 5K Display (27-inch/68.58 cm, 8GB RAM, 3.1GHz 6-core 10th-Generation Intel Core i5 Processor, 256GB SSD Storage) - Silver "
                price={5000}
                rating={5}
                image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/imac-og-202008?wid=600&hei=315&fmt=jpeg&qlt=95&.v=1594849639000"
                />
            </div>
        </div>
    );
}

export default  Home;
