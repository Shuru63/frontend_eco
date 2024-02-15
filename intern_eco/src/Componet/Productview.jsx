import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loader from '../Loder';
import {useDispatch} from 'react-redux';
// import { addCart } from '../redux/redux';
import { NavLink } from 'react-router-dom';

const Productview = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

const dispatch = useDispatch();
const addProduct = (product)=>{
    // dispatch(addCart(product));
}

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, [id]);

  const ShowProduct = () => {
    return (
      <div className="pt-4">
        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            <img
              src={product.image}
              alt={product.title.substring(0, 12)}
              className="h-full w-full object-cover object-center"
            />
          </div>

          {/* Product info */}
          <div className="mx-auto max-w-2xl px-4 pb-8 pt-8 sm:px-6 lg:grid lg:max-w-7xl lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <div className="mt-4 lg:row-span-3 lg:mt-0">
                <h2 className="sr-only">Product information</h2>
                <p className="mx-auto">{product.category}</p>
              </div>
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {product.title.substring(0, 12)}
              </h1>
              <p className="text-3xl tracking-tight text-gray-900">Price: {product.price}</p>
            </div>

            {/* Options */}
            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-10 lg:pr-6 lg:pt-4">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">{product.description}</p>
                </div>
              </div>
              <p className="text-base text-gray-900">Rating: {product.rating.rate}</p>
            </div>

            <div className="flex items-center space-x-4 mt-4">
              <button className=" bg-blue-700 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 mt-auto inline-block max-w-content"
              onClick={() =>addProduct(product)}>
                Add to Cart
              </button>
              < NavLink to="/cart" className=" bg-gray-400 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 mt-auto inline-block max-w-content">
                Go to Cart
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white">
      {loading ? <Loader /> : <ShowProduct />}
    </div>
  );
};

export default Productview;
