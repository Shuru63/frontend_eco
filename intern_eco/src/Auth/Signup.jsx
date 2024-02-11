import React from 'react';
import Login from './Login';
import { useState } from 'react';
import Loader from '../Loder';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [log, setLog] = useState(true);
    const [showLoader, setShowLoader] = useState(false);
    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, phone, password);
        if (!name || !email || !password || !phone || !password) {
            setMessage('Please fill every field');
            setVisible(true);
            return;
        } else {
            localStorage.setItem('name', JSON.stringify(name));
            localStorage.setItem('email', JSON.stringify(email));
            localStorage.setItem('phone', JSON.stringify(phone));
            localStorage.setItem('password', JSON.stringify(password));
            setInterval(() => {
                setShowLoader(true);
            }, 2000);

            setTimeout(() => {
                setShowLoader(false);
            }, 2000);
        }
    };

    const handleClick = () => {
        setLog(!log);
    };

    return (
        
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            {log ? (
                <div className="flex min-h-full flex-col justify-center px-3 py-6 lg:px-8 ">
                    <div className="mb-4 text-center">
                        <h1 className="text-2xl font-bold">Sign Up</h1>
                    </div>
                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm border border-2 border-gray-500 px-6 py-12 lg:px-8 ">
                        <form onSubmit={handleSubmit} className='space-y-6 '>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-md font-medium leading-6 text-gray-900">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="block w-full rounded-md border-0 py-1.5 
                                    text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                                    placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                                     focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="Enter your name"
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="email" className="block text-md font-medium text-gray-600">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="mt-1 p-2 w-full border rounded"
                                    placeholder="Enter your email"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="phone" className="block text-md font-medium text-gray-600">
                                    Phone Number
                                </label>
                                <input
                                    type="number"
                                    id="phone"
                                    className="mt-1 p-2 w-full border rounded"
                                    placeholder="Enter your phone number"
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="password" className="block text-md font-medium text-gray-600">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    className="mt-1 p-2 w-full border rounded"
                                    placeholder="Enter your password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>

                    <p className="text-center">
                        Already registered?{' '}
                        <span className="text-blue-500 cursor-pointer" onClick={handleClick}>
                            Login in
                        </span>{' '}
                        ?
                    </p>
                </div>
            ) : (
                <Login />
                
            )}
         
        </div>
    );
};

export default Signup;
