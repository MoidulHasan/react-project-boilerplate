import React from 'react';
import "./styles.scss"

import { EmailSubscription } from '../../EmailSubscriptions';
import { NavLink } from 'react-router-dom';

export const AppFooter = () => {
  return (
    <div className='footer-container flex justify-center'>
      <div className='content-area'>

        <div className='subscription-container flex justify-center'>
          <div className='subscription'>
            <EmailSubscription />
          </div>
        </div>

        <div className='mt-32'>
          <div className='grid grid-cols-1 md:grid-cols-3 '>

            <div className='pr-10 col-span-1'>
              <img src="./logo.svg" alt="site logo" />

              <p className='normal-text my-5'>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
            </div>

            <div className='mt-14 col-span-2'>
              <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className='pt-2 basis-full md:basis-1/2'>
                  <h6 className='sub-header'>Important Links</h6>

                  <div className='grid grid-cols-2'>
                    <NavLink className='foter-page-link' to={'./'} >Home</NavLink>
                    <NavLink className='foter-page-link' to={'./courses'} >Our Courses</NavLink>
                    <NavLink className='foter-page-link' to={'./about-us'} >About Us</NavLink>
                    <NavLink className='foter-page-link' to={'./contact-us'} >Contact Us</NavLink>
                  </div>
                </div>

                <div className='basis-full md:basis-1/2'>
                  <p className='sub-header mb-3.5'>Download our app</p>
                  <img src="./download-from-playstore.svg" alt="download-from-playstore" />
                </div>
              </div>

              <p className='sub-header'>Give your Feedback to Serve you better</p>
            </div>

          </div>
        </div>


        <div className='border-t flex flex-col-reverse md:flex-row justify-between py-5 mt-5'>
          <p>© 2022 allthebestapp.com. All rights reserved.</p>
          <div className='divide-x divide-gray-400'>
            <NavLink to={'./toc'} >
              <button className='px-2'>Terms & Conditions</button>
            </NavLink>
            <NavLink to={'./privacy-policy'} >
              <button className='px-2'>Privacy Policy</button>
            </NavLink>
          </div>
        </div>

      </div>
    </div >
  );
};
