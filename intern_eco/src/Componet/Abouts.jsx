import React from 'react'
import { NavLink } from 'react-router-dom'
import Loader from '../Loder';
import { useState } from 'react';
const About = () => {
    const [loading, setLoading] = useState(true);
    setTimeout(() => {
        setLoading(false);
    }, 2000);
    return (
        <div>
            {loading ? (
                <Loader />
            ) : (
            <div className="container py-5 my-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="col-span-1">
                        <h1 className="text-primary font-bold text-4xl mb-4">About Us</h1>
                        <p className="text-lg mb-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo molestiae earum rem doloremque, nihil delectus ullam error consectetur? Dicta, non exercitationem in consectetur totam dolorum at voluptate laudantium aliquam, officiis perspiciatis molestias reiciendis consequuntur ullam perferendis velit blanditiis distinctio assumenda a maxime reprehenderit atque. Nam eius rerum distinctio, a illo earum, optio molestias nostrum maxime quibusdam delectus, adipisci impedit? Nam corporis reiciendis minus quod eaque, laborum veritatis voluptatibus id maiores tempore accusantium recusandae perspiciatis, officia cum ad maxime fuga repellendus a magni consequatur. Unde adipisci hic provident est sint corporis, dolorem esse autem soluta molestiae optio quisquam eligendi obcaecati minima?
                        </p>
                        <NavLink to="/contact" className="rounded-full bg-gray-700 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 mt-auto  inline-block max-w-content mt-4">Contact Us</NavLink>
                    </div>

                </div>
            </div>
            )}
        </div>
    )
}

export default About