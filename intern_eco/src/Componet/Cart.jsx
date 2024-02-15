import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Cart = () => {
    const state = useSelector((state) => state.handleCart); // Correct selector key
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    // const handleClose = (item) => {
    //     dispatch(deleteCart(item));
    // };

    const cartItems = (cartItem) => {
        return (
            <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
                {/* <div className="container py-4">
                    <button onClick={() => handleClose(cartItem)} className="btn-close float-end" aria-label="Close"></button>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img src={cartItem.image} alt={cartItem.title} height="200px" width="180px" />
                        </div>

                        <h3 className="text-xl font-bold">{cartItem.title}</h3>
                        <p className="text-lg font-bold">${cartItem.price}</p>
                    </div>
                    <div className="px-4 my-5 bg-light rounded-md" key={cartItem.id}>




                    </div>

                </div> */}
            </div>
        );
    }

    const emptyCart = () => {
        return (
            <div className="px-4 my-5 bg-light rounded-3 py-5">
                {/* <div className="container py-4">
                    <div className="row">
                        <h3>Your Cart is Empty</h3>
                    </div>
                </div> */}
            </div>
        );
    }

    const button = () => {
        return (
            <div className="container">
                {/* <div className="row">
                    <NavLink to="/Checkout" className="rounded-full bg-gray-700 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 mt-auto  inline-block max-w-content mt-4">Proceed To checkout</NavLink>
                </div> */}
            </div>
        );
    }

    return (
        <>
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(cartItems)}
            {state.length !== 0 && button()}
        </>
    )
}

export default Cart