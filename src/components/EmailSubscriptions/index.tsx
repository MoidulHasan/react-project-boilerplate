import React from 'react'
import './style.scss'


export const EmailSubscription = () => {
    return (
        <div className='email-subscriptions-container grid grid-cols-1 md:grid-cols-2'>
            <div>
                <h1 className='title'>
                    Email Subscription
                </h1>

                <p className='sub-title'>
                    Sign up to get best offers and new course updates.
                </p>
            </div>

            <div className='grid grid-cols-2'>
                <div className="flex items-center">
                    <label htmlFor="simple-search" className="sr-only">Your Email</label>
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <img src="./icons/email.svg" alt="email-icon" />
                        </div>
                        <input type="text" id="simple-search" className="bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-300 focus:border-blue-100 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-100 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-100 dark:focus:border-blue-100" placeholder="Your Email" required />
                    </div>
                </div>

                <div className='flex justify-center items-center mt-2 md:mt-0'>
                    <button className='subscribe-button'>
                        Subscribe
                    </button>
                </div>


            </div>

        </div>
    )
}
