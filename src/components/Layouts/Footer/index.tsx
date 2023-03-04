import React from 'react';
import "./styles.scss"

import { EmailSubscription } from '../../EmailSubscriptions';

export const AppFooter = () => {
  return (
    <div className='footer-container'>
      <div className='subscription-container flex justify-center'>
        <div className='subscription'>
          <EmailSubscription />
        </div>

      </div>
    </div >
  );
};
