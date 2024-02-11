import React from 'react';
import { useSelector } from 'react-redux';

const Checkout = () => {
  const state = useSelector((state) => state.handleCart);

  var total = 0;
  const itemList = (item) => {
    total = total + item.price;
    return (
      <li className="list-group-item flex justify-between">
        <div>
          <h6 className="my-0">{item.title}</h6>
        </div>
        <span className="text-gray-500">${item.price}</span>
      </li>
    );
  };

  return (
    <>
      <div className="container my-5">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
          <div className="md:col-span-2">
            <h4 className="flex justify-between items-center mb-3">
              <span className="text-primary">Your cart</span>
              <span className="badge bg-primary rounded-full">{state.length}</span>
            </h4>
            <ul className="list-group mb-3">{state.map(itemList)}</ul>
            <form className="card p-2">
              <div className="flex space-x-2">
                <input type="text" className="form-input" placeholder="Promo code" />
                <button type="submit" className="btn btn-secondary">
                  Redeem
                </button>
              </div>
            </form>
          </div>
          <div className="md:col-span-3">
            <h4 className="mb-3">Billing address</h4>
            <form className="space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="form-label">
                    First name
                  </label>
                  <input type="text" className="form-input" id="firstName" placeholder="" required="" />
                </div>

                <div>
                  <label htmlFor="lastName" className="form-label">
                    Last name
                  </label>
                  <input type="text" className="form-input" id="lastName" placeholder="" required="" />
                </div>
              </div>

              <div>
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <div className="flex items-center">
                  <span className="input-group-text">@</span>
                  <input type="text" className="form-input" id="username" placeholder="Username" required="" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="form-label">
                  Email <span className="text-sm text-gray-500">(Optional)</span>
                </label>
                <input type="email" className="form-input" id="email" placeholder="you@example.com" />
              </div>

              <div>
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <input type="text" className="form-input" id="address" placeholder="1234 Main St" required="" />
              </div>

              <div>
                <label htmlFor="address2" className="form-label">
                  Address 2 <span className="text-sm text-gray-500">(Optional)</span>
                </label>
                <input type="text" className="form-input" id="address2" placeholder="Apartment or suite" />
              </div>

              <div>
                <label htmlFor="country" className="form-label">
                  Country
                </label>
                <select className="form-select" id="country" required="">
                  <option value="">Choose...</option>
                  <option>United States</option>
                </select>
              </div>

              <div>
                <label htmlFor="state" className="form-label">
                  State
                </label>
                <select className="form-select" id="state" required="">
                  <option value="">Choose...</option>
                  <option>California</option>
                </select>
              </div>

              <div>
                <label htmlFor="zip" className="form-label">
                  Zip
                </label>
                <input type="text" className="form-input" id="zip" placeholder="" required="" />
              </div>

              <hr className="my-4" />

              <div className="flex items-center space-x-3">
                <input type="checkbox" className="form-checkbox" id="same-address" />
                <label htmlFor="same-address" className="text-sm text-gray-700">
                  Shipping address is the same as my billing address
                </label>
              </div>

              <div className="flex items-center space-x-3">
                <input type="checkbox" className="form-checkbox" id="save-info" />
                <label htmlFor="save-info" className="text-sm text-gray-700">
                  Save this information for next time
                </label>
              </div>

              <hr className="my-4" />

              <h4 className="mb-3">Payment</h4>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <input id="credit" name="paymentMethod" type="radio" className="form-radio" checked="" required="" />
                  <label htmlFor="credit" className="text-sm text-gray-700">
                    Credit card
                  </label>
                </div>

                <div className="flex items-center space-x-3">
                  <input id="debit" name="paymentMethod" type="radio" className="form-radio" required="" />
                  <label htmlFor="debit" className="text-sm text-gray-700">
                    Debit card
                  </label>
                </div>

                <div className="flex items-center space-x-3">
                  <input id="paypal" name="paymentMethod" type="radio" className="form-radio" required="" />
                  <label htmlFor="paypal" className="text-sm text-gray-700">
                    PayPal
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="cc-name" className="form-label">
                    Name on card
                  </label>
                  <input type="text" className="form-input" id="cc-name" placeholder="" required="" />
                  <small className="text-sm text-gray-500">Full name as displayed on card</small>
                </div>

                <div>
                  <label htmlFor="cc-number" className="form-label">
                    Credit card number
                  </label>
                  <input type="text" className="form-input" id="cc-number" placeholder="" required="" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="cc-expiration" className="form-label">
                    Expiration
                  </label>
                  <input type="text" className="form-input" id="cc-expiration" placeholder="" required="" />
                </div>

                <div>
                  <label htmlFor="cc-cvv" className="form-label">
                    CVV
                  </label>
                  <input type="text" className="form-input" id="cc-cvv" placeholder="" required="" />
                </div>
              </div>

              <hr className="my-4" />

              <button className="w-full btn btn-primary btn-lg" type="submit">
                Continue to checkout
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
