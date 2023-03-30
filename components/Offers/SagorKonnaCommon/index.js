import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';
import useInterception from '../../../hooks/useInterception';

import restaurantTop from '../../../public/images/services/service3restaurant.jpg';

import offerTopBannerStyles from '../OfferTopBanner/OfferTopBanner.module.css';

const SagorKonnaCommon = () => {
  const offerDetailRef = useRef(null);

  useInterception(offerDetailRef);
  return (
    <div className='p-container'>
      <div className='skr-p-0-100'>
        <div ref={offerDetailRef} className='p-container skrAnimationScroll'>
          <div className={offerTopBannerStyles.skrAboutCard}>
            <div className='grid'>
              <div className='col-12 lg:col-6'>
                <div className={offerTopBannerStyles.skrAboutText}>
                  <div className={offerTopBannerStyles.skrTitleFrame}>
                    <h2 className='skrHeading'>
                      We invite you to visit Sagor Konna Resort
                    </h2>
                    <p className='skrParagraph'>
                      Consectetur adipisicing elit. Nihil, illum voluptate
                      eveniet ex fugit ea delectus, sed voluptatem. Laborum
                      accusantium libero commodi id officiis itaque esse
                      adipisci, necessitatibus asperiores, illo odio.
                    </p>
                    <div>
                      <Link href='/about'>
                        <a className='skrButton'>More About US</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-12 lg:col-6'>
                <div className={offerTopBannerStyles.skrAboutPhoto}>
                  <Image
                    src={restaurantTop}
                    alt='Restaurant Image'
                    className={offerTopBannerStyles.skrPhoto}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SagorKonnaCommon;
