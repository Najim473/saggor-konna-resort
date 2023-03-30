import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';

import useInterception from '../../../hooks/useInterception';
import offerTopBannerStyles from './OfferTopBanner.module.css';

const OfferTopBanner = () => {
  const offerTitleRef = useRef(null);

  useInterception(offerTitleRef);

  return (
    <div>
      <div className={offerTopBannerStyles.welcomeContainer}>
        <div className='p-container'>
          <div ref={offerTitleRef} className='skrTitleFrame skrAnimationScroll'>
            <h1 className='skrHeading'>Special Offers at Sagor Konna Resort</h1>
            <p className='skrParagraph'>
              Consectetur adipisicing elit. Nihil, illum voluptate eveniet ex
              fugit ea delectus, sed voluptatem. Laborum accusantium libero
              commodi id officiis itaque esse adipisci, necessitatibus
              asperiores, illo odio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferTopBanner;
