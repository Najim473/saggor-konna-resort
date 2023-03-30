import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import testimonialStyles from './CustomerTestimonials.module.css';

import palmTree from '../../../public/images/palm.svg';
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';

import testimonialPeopleImg from '../../../public/images/testimonials/testimonilaPeople1.jpg';
import testimonialPeopleImg2 from '../../../public/images/testimonials/review11.png';
import testimonialPeopleImg3 from '../../../public/images/testimonials/review22.png';
import testimonialPeopleImg4 from '../../../public/images/testimonials/review33.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import {
  Autoplay,
  Pagination,
  Navigation,
  FreeMode,
  EffectCoverflow,
} from 'swiper';

const CustomerTestimonials = () => {
  const animationFeedBackRef = useRef(null);

  //   for the view point animation

  const callBackFunc = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      animationFeedBackRef.current.classList.add('skrAnimationScrollActiveEl');
      return;
    }
    animationFeedBackRef.current &&
      animationFeedBackRef.current.classList.remove(
        'skrAnimationScrollActiveEl'
      );
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    };

    const observer = new IntersectionObserver(callBackFunc, options);
    if (animationFeedBackRef.current)
      observer.observe(animationFeedBackRef.current);

    return () => {
      if (animationFeedBackRef.current)
        observer.unobserve(animationFeedBackRef.current);
    };
  }, [animationFeedBackRef]);

  const testimonialRef = useRef(null);

  return (
    <div
      className={`${testimonialStyles.testimonialContainer} skrTransitionTop`}
    >
      <Image src={palmTree} className='skrDecoLeft' alt='Palm Tree' />
      <div class='p-container relative'>
        <div class='grid justify-content-center'>
          <div class='col-12 lg:col-12'>
            <div
              ref={animationFeedBackRef}
              className='skrAnimationScroll text-center mb-6'
            >
              <div class='skrTitleFrame'>
                <h2 class='skrMb20 skrHeading'>Feedback from our Guests</h2>
                <p className='skrParagraph mt-6'>
                  Sagor Konna always appriciate our guests all the time. We
                  always aims to give our best services to out customers.
                  Everyone is welcomed in our hotel and we assure everyone for a
                  wonderful stay. Here are some feedbacks of our guests.
                </p>
                <div>
                  <Link href='/about'>
                    <a className='skrButton mt-4'> Read More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div class='col-12 lg:col-12'>
            {/* swiper slider  */}
            <Swiper
              watchSlidesProgress={true}
              freeMode={true}
              loop={true}
              spaceBetween={30}
              centeredSlides={true}
              effect={'coverflow'}
              grabCursor={true}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
                slideShadows: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              speed={800}
              slidesPerView={'auto'}
              // navigation={true}
              modules={[Autoplay, Navigation, EffectCoverflow]}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 2,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
              }}
              className='mySwiper skrTestimonialSlider'
            >
              <SwiperSlide style={{ width: '700px', marginRight: '20px' }}>
                <div className='skrTestimonialCard'>
                  <div className='skrAvatarFrame'>
                    <Image
                      src={testimonialPeopleImg}
                      alt='Testimonial People'
                    />
                  </div>
                  <div className='skrNameNText text-center'>
                    <h3 className='mb-2'>Jabir Al Bafi</h3>
                    <div>From Khulna</div>
                    <blockquote className='skrBlockQuote'>
                      <ul class='skrStars'>
                        <li>
                          <i class='fas fa-star'></i>
                        </li>
                        <li>
                          <i class='fas fa-star'></i>
                        </li>
                        <li>
                          <i class='fas fa-star'></i>
                        </li>
                        <li>
                          <i class='fas fa-star'></i>
                        </li>
                        <li>
                          <i class='fas fa-star'></i>
                        </li>
                      </ul>
                      Good behavior. Maximum room are air condition
                      available.its have a restaurant also. Most expecting think
                      is this is just opposite of the sea beach. Amazing
                      Place... You guys can stay there and enjoy the beauty of
                      sea...
                    </blockquote>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide style={{ width: '700px', marginRight: '20px' }}>
                <div className='skrTestimonialCard'>
                  <div className='skrAvatarFrame'>
                    <Image
                      src={testimonialPeopleImg3}
                      alt='Testimonial People'
                    />
                  </div>
                  <div className='skrNameNText text-center'>
                    <h3 className='mb-2'>Niloy Siddiqui</h3>
                    <div>From Dhaka</div>
                    <blockquote className='skrBlockQuote'>
                      <ul class='skrStars'>
                        <li>
                          <i class='fas fa-star'></i>
                        </li>
                        <li>
                          <i class='fas fa-star'></i>
                        </li>
                        <li>
                          <i class='fas fa-star'></i>
                        </li>
                        <li>
                          <i class='fas fa-star'></i>
                        </li>
                        <li>
                          <i class='fas fa-star'></i>
                        </li>
                      </ul>
                      Great service even though the Resort is still being
                      renovated, rooms are spacious, comfortable and clean.
                      Quality of service is sure to advance alongside the
                      construction and completion of the Resort and surrounding
                      areas.
                    </blockquote>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide style={{ width: '700px', marginRight: '20px' }}>
                <div className='skrTestimonialCard'>
                  <div className='skrAvatarFrame'>
                    <Image
                      src={testimonialPeopleImg}
                      alt='Testimonial People'
                    />
                  </div>
                  <div className='skrNameNText text-center'>
                    <h3 className='mb-2'>Mohammad Amirul Islam Bhuiyan</h3>
                    <div>From Dhaka</div>
                    <blockquote className='skrBlockQuote'>
                      <ul class='skrStars'>
                        <li>
                          <i class='fas fa-star'></i>
                        </li>
                        <li>
                          <i class='fas fa-star'></i>
                        </li>
                        <li>
                          <i class='fas fa-star'></i>
                        </li>
                        <li>
                          <i class='fas fa-star'></i>
                        </li>
                        <li>
                          <i class='fas fa-star'></i>
                        </li>
                      </ul>
                      Hotel Sagor Konna Resort Kuakata is designed for people
                      who are in desperate need for relaxation and spending some
                      time away from the daily drudgery .Hotel Sagor Konna
                      Resort Kuakata sets out the guest services in such ways
                      that make you completely relieved in all aspects.
                    </blockquote>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide style={{ width: '700px', marginRight: '20px' }}>
                <div className='skrTestimonialCard'>
                  <div className='skrAvatarFrame'>
                    <Image
                      src={testimonialPeopleImg2}
                      alt='Testimonial People'
                    />
                  </div>
                  <div className='skrNameNText text-center'>
                    <h3 className='mb-2'>Tariq Aziz</h3>
                    <div className='skrLocation'>From Dhaka</div>
                    <blockquote className='skrBlockQuote'>
                      <ul class='skrStars'>
                        <li>
                          <i class='fas fa-star'></i>
                        </li>
                        <li>
                          <i class='fas fa-star'></i>
                        </li>
                        <li>
                          <i class='fas fa-star'></i>
                        </li>
                        <li>
                          <i class='fas fa-star'></i>
                        </li>
                        <li>
                          <i class='fas fa-star'></i>
                        </li>
                      </ul>
                      Hotel Sagor KonnaResort listed the most significant ones,
                      otherwise, there are all facilities, which couples, family
                      members, business personnel require. Having with own
                      generator service, room service well security, trained
                      manpower. All room are fully furnished.
                    </blockquote>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide style={{ width: '700px', marginRight: '20px' }}>
                <div className='skrTestimonialCard'>
                  <div className='skrAvatarFrame'>
                    <Image
                      src={testimonialPeopleImg4}
                      alt='Testimonial People'
                    />
                  </div>
                  <div className='skrNameNText text-center'>
                    <h3 className='mb-2'>Lubna Srabon</h3>
                    <div className='skrLocation'>From Dhaka</div>
                    <blockquote className='skrBlockQuote'>
                      <ul class='skrStars'>
                        <li>
                          <i class='fas fa-star'></i>
                        </li>
                        <li>
                          <i class='fas fa-star'></i>
                        </li>
                        <li>
                          <i class='fas fa-star'></i>
                        </li>
                        <li>
                          <i class='fas fa-star'></i>
                        </li>
                        <li>
                          <i class='fas fa-star'></i>
                        </li>
                      </ul>
                      Great service even though the Resort is still being
                      renovated, rooms are spacious, comfortable and clean.
                      Quality of service is sure to advance alongside the
                      construction and completion of the Resort and surrounding
                      areas.
                    </blockquote>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerTestimonials;
