import React from 'react'
import './style.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

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

            <div className='flex justify-center items-center'>
                <div className='email-input'>
                    <span>
                        <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                </div>
            </div>

        </div>
    )
}
