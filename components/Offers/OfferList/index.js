import React from 'react';
import offerStyles from './OfferList.module.css';
import SingleOffer from './SingleOffer';

const OfferList = ({ offer }) => {
  return (
    <div className='skr-p-50-80'>
      <div className='p-container'>
        <div className='grid'>
          {offer.map((singleOffer) => (
            <div key={singleOffer?.key} className='col-12 md:col-6'>
              <SingleOffer offer={singleOffer} component='special' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfferList;
