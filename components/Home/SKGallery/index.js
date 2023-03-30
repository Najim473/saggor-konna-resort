import Link from 'next/link';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import skGalleryStyles from './SKGallery.module.css';

// swiper
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';

const SKGallery = () => {
  const animationRef = useRef(null);

  //   for the view point animation

  const callBackFunc = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      animationRef.current.classList.add('skrAnimationScrollActiveEl');
      return;
    }
    animationRef.current &&
      animationRef.current.classList.remove('skrAnimationScrollActiveEl');
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    };

    const observer = new IntersectionObserver(callBackFunc, options);
    if (animationRef.current) observer.observe(animationRef.current);

    return () => {
      if (animationRef.current) observer.unobserve(animationRef.current);
    };
  }, [animationRef]);

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

  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <div className={`${skGalleryStyles.homeGalleryContainer}`}>
      <div className='p-container'>
        <div className='grid align-items-center'>
          <div className='col-12 lg:col-12 mb-6'>
            <div
              ref={animationRef}
              className='skrAnimationScroll text-center mb-6'
            >
              <h2 className={`${skGalleryStyles.galleryHeadingText}`}>
                Sagor Konna Resort is Waiting for You!{' '}
              </h2>
              <p className={`${skGalleryStyles.galleryParagraph}`}>
                Discover Sagor Konna Resort, that is a unique intermingling of
                nature friendly yet designed with all modern state of art
                equipment and luxury facilities, located in the bank of KuaKata
                Sea Beach in Kuakata.
              </p>
              <div>
                <Link href='/about'>
                  <a className='skrButton'>More About Us</a>
                </Link>
              </div>
            </div>
          </div>
          <div className='col-12 lg:col-12'>
            {/* slider  */}
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
                <div className={skGalleryStyles.skrGalleryImageFrame}>
                  <a data-fancybox='gallery' href='/images/HomeGallery/1.jpg'>
                    <Image
                      src='/images/HomeGallery/1.jpg'
                      alt='Sagor Konna Resort'
                      layout='fill'
                      className={skGalleryStyles.skrGalleryImageRounded}
                    />
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {' '}
                <div className={skGalleryStyles.skrGalleryImageFrame}>
                  <a data-fancybox='gallery' href='/images/HomeGallery/2.jpg'>
                    <Image
                      src='/images/HomeGallery/2.jpg'
                      alt='Sagor Konna Resort'
                      layout='fill'
                      className={skGalleryStyles.skrGalleryImageRounded}
                    />
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {' '}
                <div className={skGalleryStyles.skrGalleryImageFrame}>
                  <a data-fancybox='gallery' href='/images/HomeGallery/3.jpg'>
                    <Image
                      src='/images/HomeGallery/3.jpg'
                      alt='Sagor Konna Resort'
                      layout='fill'
                      className={skGalleryStyles.skrGalleryImageRounded}
                    />
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {' '}
                <div className={skGalleryStyles.skrGalleryImageFrame}>
                  <a data-fancybox='gallery' href='/images/HomeGallery/4.jpg'>
                    <Image
                      src='/images/HomeGallery/4.jpg'
                      alt='Sagor Konna Resort'
                      layout='fill'
                      className={skGalleryStyles.skrGalleryImageRounded}
                    />
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {' '}
                <div className={skGalleryStyles.skrGalleryImageFrame}>
                  <a data-fancybox='gallery' href='/images/HomeGallery/8.jpg'>
                    <Image
                      src='/images/HomeGallery/8.jpg'
                      alt='Sagor Konna Resort'
                      layout='fill'
                      className={skGalleryStyles.skrGalleryImageRounded}
                    />
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {' '}
                <div className={skGalleryStyles.skrGalleryImageFrame}>
                  <a data-fancybox='gallery' href='/images/HomeGallery/1.jpg'>
                    <Image
                      src='/images/HomeGallery/3.jpg'
                      alt='Sagor Konna Resort'
                      layout='fill'
                      className={skGalleryStyles.skrGalleryImageRounded}
                    />
                  </a>
                </div>
              </SwiperSlide>
              <div className='flex justify-content-end'>
                <div
                  className={`${skGalleryStyles.navigators}  flex justify-content-center align-items-center mt-4`}
                >
                  <div
                    className={`${skGalleryStyles.prevArrow} mr-3`}
                    onClick={handlePrev}
                  >
                    <span class='material-icons-sharp'>arrow_back</span>
                  </div>
                  <div
                    className={`${skGalleryStyles.nextArrow}`}
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
  );
};

export default SKGallery;
