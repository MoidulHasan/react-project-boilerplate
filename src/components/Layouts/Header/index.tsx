import React from 'react';
import { PATH } from '../../../constants/paths';
import './style.scss'
import { NavLink } from 'react-router-dom';

export const AppHeader = () => {

    const menuItems = <>
        <li className='nav-button'><NavLink className='nav-button-link' to="/">Home</NavLink></li>
        <li className='nav-button'><NavLink className='nav-button-link' to="/categroies">Categroies</NavLink></li>
        <li className='nav-button'><NavLink className='nav-button-link' to="/contact">Contact</NavLink></li>
        <li className='nav-button'><NavLink className='nav-button-link' to="/about">About</NavLink></li>
    </>

    return (
        <div className='nav-container'>
            <div className='content-area flex justify-between items-center'>
                <div>
                    <img className='nav-logo' src="./logo.svg" alt="site logo" />
                </div>

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

                    <button className='p-0'>
                        <img src="./download-from-playstore.svg" alt="download-from-playstore" />
                    </button>

                </div>
            </div>

        </div>
    );
};
