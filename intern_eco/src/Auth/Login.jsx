import React from 'react'
import { useState } from 'react'
import Homepage from '../Componet/Navbar'
import {
    CModal,
    CModalTitle,
    CModalBody,
    CModalFooter,
    CButton,
} from '@coreui/react';
import Loader from '../Loder';
import Signup from './Signup';
const Login = () => {
    const [emaillog, setEmailLog] = useState("")
    const [passwordLog, setPasswordLog] = useState("")
    const [home, setHome] = useState(true)
    const [showLoader, setShowLoader] = useState(false);
    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState('');
    
    const handleLogin = (e) => {
        e.preventDefault();
        console.log(emaillog, passwordLog)
        const email = localStorage.getItem("email").replace(/''/g, "")
        const pass = localStorage.getItem("password").replace(/''/g, "")
        if (!emaillog || !passwordLog) {
            setMessage("please fill every field ")
            setVisible(true)
            return;
        }
        else if (emaillog !== email || passwordLog !== pass) {
            setMessage("please fill every field ")
            setVisible(true)
            return;
        } else {
            setHome(!home)
            setInterval(() => {
                setShowLoader(true);
            }, 2000);

            setTimeout(() => {
                setShowLoader(false);
            }, 2000);

        }
    }
    const handleClick = () => {
        setHome(!Signup)
    }
    return (
        <div>
            {home ? (
                <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                    <div className="loader">
                        {
                            showLoader && <Loader></Loader>
                        }
                    </div>
                    <CModal
                        visible={visible}
                        onClose={() => setVisible(false)}
                        aria-labelledby="LiveDemoExampleLabel"
                    >
                        <CModalTitle id="LiveDemoExampleLabel">Alert</CModalTitle>
                        <CModalBody>
                            <p>{message}</p>
                        </CModalBody>
                        <CModalFooter>
                            <CButton color="secondary" onClick={() => setVisible(false)}>
                                Close
                            </CButton>
                        </CModalFooter>
                    </CModal>
                    <div className="mb-4 text-center">
                        <h1 className="text-2xl font-bold">Log in</h1>
                    </div>
                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm border border-2 border-gray-500 px-6 py-12 lg:px-8">
                        <form onSubmit={handleLogin} className='space-y-6' >
                            <div className="form-control">
                                <label className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                                <input type="email" id="email" placeholder="Gmail"
                                    className="block w-full rounded-md border-0 py-1.5 
                          text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                          placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                           focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={(e) => setEmailLog(e.target.value)
                                    } />
                            </div>
                            <div className="form-control">
                                <label>Password</label>
                                <input type="password" placeholder="password" className="mt-1 p-2 w-full border rounded"
                                    onChange={(e) => setPasswordLog(e.target.value)
                                    } />
                            </div>
                            <div><button type="submit" value="submit"
                                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Submit</button></div>
                            
                          
                        </form>
                    </div>
                </div>
            ) : (
                <Homepage />
            )}
        </div>
    )
}

export default Login
