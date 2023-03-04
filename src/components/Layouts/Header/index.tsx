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
                <div>
                    <img className='nav-logo' src="./logo.svg" alt="site logo" />
                </div>

                <div className='hidden md:flex justify-end items-center '>
                    <div className='flex justify-between items-center'>
                        <div className="">
                            <input type="text" className="search-field" placeholder="Search" />
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

        </div>
    );
};