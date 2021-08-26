import React from 'react';
import { useStateValue } from './StateProvider';
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct'
function Checkout() {
    const[{ basket }]= useStateValue();
    return (
        <div className="checkout">
          <div className="checkout__left">
            <img className="checkout__ad"
            src="https://m.media-amazon.com/images/I/614mcBbGoOL._SX3000_.jpg"
            alt=""
             />
             {basket?.length === 0 ?(
                 <div>
                    <h2>Your Shopping Basket is empty</h2>
                    <p>You have no items saved in your basket.To buy something, click on the add to basket button next to the item.</p>
                 </div>
                ):(
                 <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                    {basket.map(item =>(
                        <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                 </div>
                 
                )}
          </div>
            {basket.length > 0 &&(
                <div className="checkout__right">
                    {/* <Subtotal /> */}
                    <h1>Subtotal</h1>
                </div>
            )}
        </div>
    )
}

export default Checkout
