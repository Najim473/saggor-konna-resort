import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SingleOffer = ({ offer, component }) => {
  return (
    <div className='skrOfferCard'>
      <div class='skrCoverFrame skOfferCoverFrame'>
        <Image
          src={offer?.picture}
          alt='cover'
          className='offerImg'
          width='100%'
          height='85%'
          layout='responsive'
          objectFit='contain'
        />
        {component === 'special' && <div class='skrBadge'>Popular</div>}
      </div>
      <div class='skrDescriptionFrame'>
        <h3 className='skrMb20'>{offer?.title}</h3>
        <div className='skrTextLight skrMb20'>{offer?.description}</div>
        <div className='skrCardBottom flex justify-content-between align-items-center'>
          <div className='skrPrice'>
            <div>
              <Link href='/room'>
                <a className='skrButton'>Book</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleOffer;
