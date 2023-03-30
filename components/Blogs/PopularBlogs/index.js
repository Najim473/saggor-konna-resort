import React, { useCallback, useRef } from 'react';
import useInterception from '../../../hooks/useInterception';
import popularBlogStyles from './PopularBlogs.module.css';

import { Swiper, SwiperSlide } from 'swiper/react';

// swiper
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import SingleBlog from '../BlogsList/SingleBlog';

const PopularBlogs = ({ blogs }) => {
  const popularBlogTitleRef = useRef(null);

  useInterception(popularBlogTitleRef);

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

  useInterception(menuTitleRef);
  //   useInterception(swiperRef);

  return (
    <div className={popularBlogStyles.popularBlogContainer}>
      <div className='p-container'>
        <div className='grid'>
          <div className='col-12'>
            <div
              ref={popularBlogTitleRef}
              className='skrTitleFrame skrAnimationScroll'
            >
              <h1 className={` text-4xl md:text-7xl`}>
                Popular Blogs about the Sagor Konna, Kuakata
              </h1>
              <p className='skrParagraph'>
                Consectetur adipisicing elit. Nihil, illum voluptate eveniet ex
                fugit ea delectus, sed voluptatem. Laborum accusantium libero
                commodi id officiis itaque esse adipisci, necessitatibus
                asperiores, illo odio.
              </p>
            </div>
          </div>
          <div className='col-12 lg:col-12'>
            <div className=''>
              <Swiper
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
                {/* {menuLists.slice(0, 6)?.map((menu) => (
                  <SwiperSlide key={menu.id}>
                    <MenuCard key={menu.id} menu={menu} />
                  </SwiperSlide>
                ))} */}
                {blogs?.slice(0, 5).map((singleBlog) => (
                  <SwiperSlide key={singleBlog?.id}>
                    <SingleBlog
                      singleBlog={singleBlog}
                      key={singleBlog?.id}
                      component='popularBlog'
                    />
                  </SwiperSlide>
                ))}

                <div className='flex justify-content-end'>
                  <div
                    className={`${popularBlogStyles.navigators}  flex justify-content-center align-items-center mt-4`}
                  >
                    <div
                      className={`${popularBlogStyles.prevArrow} mr-3`}
                      onClick={handlePrev}
                    >
                      <span class='material-icons-sharp'>arrow_back</span>
                    </div>
                    <div
                      className={`${popularBlogStyles.nextArrow}`}
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

export default PopularBlogs;
