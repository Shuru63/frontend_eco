import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../Loder';
import { NavLink } from 'react-router-dom';
import Banner from './Banner';
const Content = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getUser = async () => {
        try {
            setLoading(true);
            const response = await fetch("https://dummyjson.1com/products");
            if (!response.ok) {
                throw new Error(`Failed to fetch data. Status: ${response.status}`);
            }

            const data = await response.json();
            setProducts(data.products);
            console.log(data.products)
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error.message);
            setLoading(false);
            setError('Error fetching data');
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        getUser();
    }, []);

    return (
        <div className="bg-white">
            {loading ? (
                <Loader />
            ) : (
                <div>
                   <Banner/>
                    <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                        <h2 className="text-2xl font-bold  text-gray-900 text">Customers also purchased</h2>
                        </div>

                        {
                            Array.isArray(products) && products.map((curr) => {
                                console.log(curr.title)
                                console.log(curr.description)
                                return (
                                    <div>
                                        < div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8" >
                                            <div key={curr.id} className="group relative">
                                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                                    <img
                                                        src={curr.thumbnail}
                                                        alt={curr.imageAlt}
                                                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                                    />
                                                </div>
                                                <div className="mt-4 flex justify-between">
                                                    <div>
                                                        <h3 className="text-sm text-gray-700">

                                                            <span aria-hidden="true" className="absolute inset-0" >
                                                                {curr.title}
                                                            </span>
                                                        </h3>
                                                        <p className="mt-1 text-sm text-gray-500">{curr.color}</p>
                                                    </div>
                                                    <p className="text-sm font-medium text-gray-900">{curr.price}</p>
                                                    <NavLink to={`/product/${curr.id}`} className='btn btn-outline-dark'>Buy now</NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                )

                            })
                        }

                    </div>
                </div>)}
        </div >
    );
};

export default Content;
