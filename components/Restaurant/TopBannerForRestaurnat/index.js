import Link from 'next/link';
import React, { useRef } from 'react';
import topBannerRestaurantStyles from './TopBannerForRestaurnat.module.css';

import restaurantTop from '../../../public/images/services/service3restaurant.jpg';
import Image from 'next/image';
import useInterception from '../../../hooks/useInterception';

const TopBannerForRestaurnat = () => {
  const restaurantTitleRef = useRef(null);
  const restaurantDetailRef = useRef(null);

  useInterception(restaurantTitleRef);
  useInterception(restaurantDetailRef);

  return (
    <div>
      <div className={topBannerRestaurantStyles.welcomeContainer}>
        <div className='p-container'>
          <div
            ref={restaurantTitleRef}
            className='skrTitleFrame skrAnimationScroll'
          >
            <h1 className='skrHeading'>Welcome to Sagor Konna Restaurant</h1>
            <p className='skrParagraph'>
              Consectetur adipisicing elit. Nihil, illum voluptate eveniet ex
              fugit ea delectus, sed voluptatem. Laborum accusantium libero
              commodi id officiis itaque esse adipisci, necessitatibus
              asperiores, illo odio.
            </p>
          </div>
        </div>
      </div>
      <div className='skr-p-0-100'>
        <div
          ref={restaurantDetailRef}
          className='p-container skrAnimationScroll'
        >
          <div className={topBannerRestaurantStyles.skrAboutCard}>
            <div className='grid'>
              <div className='col-12 lg:col-6'>
                <div className={topBannerRestaurantStyles.skrAboutText}>
                  <div className={topBannerRestaurantStyles.skrTitleFrame}>
                    <h2 className='skrHeading'>
                      We Invite you to visit our restaurant
                    </h2>
                    <p className='skrParagraph'>
                      Consectetur adipisicing elit. Nihil, illum voluptate
                      eveniet ex fugit ea delectus, sed voluptatem. Laborum
                      accusantium libero commodi id officiis itaque esse
                      adipisci, necessitatibus asperiores, illo odio.
                    </p>
                    <div>
                      <Link href='/restaurant/menu'>
                        <a className='skrButton'>Menu</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-12 lg:col-6'>
                <div className={topBannerRestaurantStyles.skrAboutPhoto}>
                  <Image
                    src={restaurantTop}
                    alt='Restaurant Image'
                    className={topBannerRestaurantStyles.skrPhoto}
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

export default TopBannerForRestaurnat;
