import React from 'react';
import './style.scss'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export const AppHeader = () => {

    const menuItems = <>
        <li className='nav-button'><NavLink className='nav-button-link' to="/">Home</NavLink></li>
        <li className='nav-button'><NavLink className='nav-button-link' to="/categroies">Categroies</NavLink></li>
        <li className='nav-button'><NavLink className='nav-button-link' to="/contact">Contact</NavLink></li>
        <li className='nav-button'><NavLink className='nav-button-link' to="/about">About</NavLink></li>
    </>

    return (
        <div className='nav-container flex justify-center'>
            <div className='content-area flex justify-between items-center'>
                <NavLink to={'/'} >
                    <img className='nav-logo' src="./logo.svg" alt="site logo" />
                </NavLink>

                <div className='hidden md:flex justify-end items-center divide-x'>
                    <div className='flex justify-between items-center'>
                        {/* <div className="">
                            <input type="text" className="search-field" placeholder="Search" />
                        </div> */}

                        <div className="flex items-center">
                            <label htmlFor="header-search" className="sr-only">Search</label>
                            <div className="relative w-full">
                                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                    <img src="./icons/search.svg" alt="email-icon" />
                                </div>
                                <input type="text" id="header-search" className="bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-300 focus:border-blue-100 block w-full  p-2.5 pr-10 dark:bg-gray-700 dark:border-gray-100 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-100 dark:focus:border-blue-100" placeholder="Search" required />
                            </div>
                        </div>

                        <ul className='flex justify-between items-center'>
                            {menuItems}
                        </ul>
                    </div>

                    <div className='flex justify-between items-center'>

                        <button className='nav-action-button login-button-color '>
                            Login
                        </button>

                        <button className='nav-action-button text-white signup-button-color'>
                            Signup
                        </button>

                        <button className='p-0 download-from-playstore'>
                            <img src="./download-from-playstore.svg" alt="download-from-playstore" className='' />
                        </button>

                    </div>
                </div>

                <div className='md:hidden'>
                    <button className='cursor-pointer p-2'>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>


            </div>

        </div >
    );
};