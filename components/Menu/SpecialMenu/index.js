import React, { useCallback, useRef } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// swiper
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import useInterception from '../../../hooks/useInterception';
import Link from 'next/link';
import MenuCard from '../../Restaurant/RestaurantMenu/MenuCard';

import menuSpecialStyle from './SpecialMenu.module.css';
import { useRouter } from 'next/router';

const SpecialMenu = ({ menuLists }) => {
  const sliderRef = useRef(null);

  const sliderSettings = {
    210: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    440: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    680: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  };

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const menuTitleRef = useRef(null);
  const swiperRef = useRef(null);

  useInterception(menuTitleRef);

  return (
    <div className='skr-p-0-80'>
      <div className='p-container'>
        <div className='grid'>
          <div className='col-12'>
            <div
              ref={menuTitleRef}
              className='text-center skrTitleFrame skrAnimationScroll'
            >
              <h2 className='skrHeading'>Special Offers</h2>
              <p className='skrParagraph'>
                Consectetur adipisicing elit. Nihil, illum voluptate eveniet ex
                fugit ea delectus, sed voluptatem. Laborum accusantium libero
                commodi id officiis itaque esse adipisci, necessitatibus
                asperiores, illo odio.
              </p>
              <div>
                <Link href='/restaurant/menu'>
                  <a className='skrButton'>Full Menu</a>
                </Link>
              </div>
            </div>
          </div>
          <div className='col-12 lg:col-12'>
            <div className=''>
              <Swiper
                ref={sliderRef}
                // install Swiper modules
                breakpoints={sliderSettings}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={20}
                slidesPerView={3}
                // navi
                gation={true}
                loop={true}
                pagination={{ type: 'fraction' }}
                //   scrollbar={{ draggable: true }}
              >
                {menuLists.slice(0, 6)?.map((menu) => (
                  <SwiperSlide key={menu.id}>
                    <MenuCard key={menu.id} menu={menu} component='special' />
                  </SwiperSlide>
                ))}

                <div className='flex justify-content-end'>
                  <div
                    className={`${menuSpecialStyle.navigators}  flex justify-content-center align-items-center mt-4`}
                  >
                    <div
                      className={`${menuSpecialStyle.prevArrow} mr-3`}
                      onClick={handlePrev}
                    >
                      <span class='material-icons-sharp'>arrow_back</span>
                    </div>
                    <div
                      className={`${menuSpecialStyle.nextArrow}`}
                      onClick={handleNext}
                    >
                      <span class='material-icons-sharp'>arrow_forward</span>
                    </div>
                  </div>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialMenu;
