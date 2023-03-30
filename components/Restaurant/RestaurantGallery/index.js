import Image from 'next/image';
import Link from 'next/link';
import React, { useCallback, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import resGalleryStyles from './RestaurantGallery.module.css';

// swiper
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import useInterception from '../../../hooks/useInterception';

const RestaurantGallery = () => {
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

  const menuRef = useRef(null);
  const swiperRef = useRef(null);

  useInterception(menuRef);
  useInterception(swiperRef);

  return (
    <div className='skr-p-0-80'>
      <div className='p-container'>
        <div className='grid'>
          <div className='col-12'>
            <div
              ref={menuRef}
              className='text-center skrTitleFrame skrAnimationScroll'
            >
              <h2 className='skrHeading'>Restaurant Photo Gallery</h2>
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
            <div ref={swiperRef} className='skrAnimationScroll'>
              <Swiper
                ref={sliderRef}
                // install Swiper modules
                breakpoints={sliderSettings}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={20}
                slidesPerView={3}
                // navigation={true}
                loop={true}
                pagination={{ type: 'fraction' }}
                //   scrollbar={{ draggable: true }}
                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log('slide change')}
              >
                <SwiperSlide>
                  <div
                    className={`${resGalleryStyles.skrRestaurantImageFrame} skrRestaurantFrame`}
                  >
                    <a data-fancybox='gallery' href='/images/HomeGallery/1.jpg'>
                      <Image
                        src='/images/HomeGallery/1.jpg'
                        alt='Sagor Konna Resort'
                        layout='fill'
                        className={`${resGalleryStyles.skrRestaurantImageRounded} restaurantPhoto`}
                      />
                      <div className={resGalleryStyles.skrBadge}>
                        View From Sea
                      </div>
                      <span className={resGalleryStyles.skrRestaurantZoom}>
                        <i class='fas fa-search-plus'></i>
                      </span>
                    </a>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className={`${resGalleryStyles.skrRestaurantImageFrame} skrRestaurantFrame`}
                  >
                    <a data-fancybox='gallery' href='/images/restaurant/1.jpg'>
                      <Image
                        src='/images/restaurant/1.jpg'
                        alt='Sagor Konna Resort'
                        layout='fill'
                        className={`${resGalleryStyles.skrRestaurantImageRounded} restaurantPhoto`}
                      />
                      <div className={resGalleryStyles.skrBadge}>
                        View From Sea
                      </div>
                      <span className={resGalleryStyles.skrRestaurantZoom}>
                        <i class='fas fa-search-plus'></i>
                      </span>
                    </a>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className={`${resGalleryStyles.skrRestaurantImageFrame} skrRestaurantFrame`}
                  >
                    <a data-fancybox='gallery' href='/images/restaurant/2.jpg'>
                      <Image
                        src='/images/restaurant/2.jpg'
                        alt='Sagor Konna Resort'
                        layout='fill'
                        className={`${resGalleryStyles.skrRestaurantImageRounded} restaurantPhoto`}
                      />
                      <div className={resGalleryStyles.skrBadge}>
                        View From Sea
                      </div>
                      <span className={resGalleryStyles.skrRestaurantZoom}>
                        <i class='fas fa-search-plus'></i>
                      </span>
                    </a>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className={`${resGalleryStyles.skrRestaurantImageFrame} skrRestaurantFrame`}
                  >
                    <a data-fancybox='gallery' href='/images/restaurant/3.jpg'>
                      <Image
                        src='/images/restaurant/3.jpg'
                        alt='Sagor Konna Resort'
                        layout='fill'
                        className={`${resGalleryStyles.skrRestaurantImageRounded} restaurantPhoto`}
                      />
                      <div className={resGalleryStyles.skrBadge}>
                        View From Sea
                      </div>
                      <span className={resGalleryStyles.skrRestaurantZoom}>
                        <i class='fas fa-search-plus'></i>
                      </span>
                    </a>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className={`${resGalleryStyles.skrRestaurantImageFrame} skrRestaurantFrame`}
                  >
                    <a data-fancybox='gallery' href='/images/restaurant/4.jpg'>
                      <Image
                        src='/images/restaurant/4.jpg'
                        alt='Sagor Konna Resort'
                        layout='fill'
                        className={`${resGalleryStyles.skrRestaurantImageRounded} restaurantPhoto`}
                      />
                      <div className={resGalleryStyles.skrBadge}>
                        View From Sea
                      </div>
                      <span className={resGalleryStyles.skrRestaurantZoom}>
                        <i class='fas fa-search-plus'></i>
                      </span>
                    </a>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className={`${resGalleryStyles.skrRestaurantImageFrame} skrRestaurantFrame`}
                  >
                    <a data-fancybox='gallery' href='/images/restaurant/5.jpg'>
                      <Image
                        src='/images/restaurant/5.jpg'
                        alt='Sagor Konna Resort'
                        layout='fill'
                        className={`${resGalleryStyles.skrRestaurantImageRounded} restaurantPhoto`}
                      />
                      <div className={resGalleryStyles.skrBadge}>
                        View From Sea
                      </div>
                      <span className={resGalleryStyles.skrRestaurantZoom}>
                        <i class='fas fa-search-plus'></i>
                      </span>
                    </a>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className={`${resGalleryStyles.skrRestaurantImageFrame} skrRestaurantFrame`}
                  >
                    <a data-fancybox='gallery' href='/images/restaurant/6.jpg'>
                      <Image
                        src='/images/restaurant/6.jpg'
                        alt='Sagor Konna Resort'
                        layout='fill'
                        className={`${resGalleryStyles.skrRestaurantImageRounded} restaurantPhoto`}
                      />
                      <div className={resGalleryStyles.skrBadge}>
                        View From Sea
                      </div>
                      <span className={resGalleryStyles.skrRestaurantZoom}>
                        <i class='fas fa-search-plus'></i>
                      </span>
                    </a>
                  </div>
                </SwiperSlide>

                <div className='flex justify-content-end'>
                  <div
                    className={`${resGalleryStyles.navigators}  flex justify-content-center align-items-center mt-4`}
                  >
                    <div
                      className={`${resGalleryStyles.prevArrow} mr-3`}
                      onClick={handlePrev}
                    >
                      <span class='material-icons-sharp'>arrow_back</span>
                    </div>
                    <div
                      className={`${resGalleryStyles.nextArrow}`}
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

export default RestaurantGallery;
