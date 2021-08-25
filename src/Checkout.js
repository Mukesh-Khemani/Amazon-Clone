import React from 'react';
import { useStateValue } from './StateProvider';
function Checkout() {
    const[{ basket }]= useStateValue();
    return (
        <div className="checkout">
            <img classname="checkout__ad"
            src="https://i.ytimg.com/vi/MFPg04jAfcY/maxresdefault.jpg"
            alt=""
             />
        </div>
    )
}

export default Checkout
