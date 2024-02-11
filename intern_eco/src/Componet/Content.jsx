import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Loader from '../Loder';
import Banner from './Banner';

const Content = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                setProducts(response.data);
                console.log(products)
                setLoading(false);
            } catch (error) {
                console.error('Error fetching product:', error);
                setLoading(false);
            
            }
        };

        fetchProduct();
    }, []);


    return (
        <div className="bg-white">
            {loading ? (
                <Loader />
            ) : (
                <div>
                    <Banner />
                    <div className="bg-white">
                        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                            <h2 className="sr-only">Products</h2>

                            {Array.isArray(products) && (
                                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8  ">
                                    {products.map((product) => (
                                        <div className="border-2 ">
                                            <div key={product.id} className="group relative max-w-xs mx-auto  ">
                                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-400 lg:aspect-none  lg:h-80 border-2">
                                                    <img
                                                        src={product.image}
                                                        alt={product.title.substring(0,12)}
                                                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                                    />
                                                </div>
                                                <div className="mt-4">
                                                    <div>
                                                        <h3 className="text-sm text-gray-700 ">
                                                            <NavLink href={`/content/${product.id}`}>
                                                                <span aria-hidden="true" className="absolute inset-0" />
                                                                {product.title.substring(0,12)}
                                                            </NavLink>
                                                        </h3>
                                                    </div>
                                                    <p className="text-sm font-medium text-gray-900">Price:{product.price}</p>

                                                </div>

                                            </div >
                                            <span className="rounded-full bg-gray-700 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 mt-auto  inline-block max-w-content mt-4">
                                                <NavLink
                                                   
                                                    to={`/content/${product.id}`}                                              >
                                                    Buy now <span aria-hidden="true">&rarr;</span>
                                                </NavLink>
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            )}


        </div>
    )
};

export default Content;
