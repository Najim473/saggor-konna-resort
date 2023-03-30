import Image from 'next/image';
import React from 'react';
import restaurantVideoStyles from './RestaurantVideoComponent.module.css';
import playBtn from '../../../public/images/play.svg';

import resVideoFrameImg from '../../../public/images/restaurant/videoCover.jpg';

const RestaurantVideoComponent = () => {
  return (
    <div className={restaurantVideoStyles.videoCOomponentContainer}>
      <div className='p-container'>
        <div className={restaurantVideoStyles.skrAboutCard}>
          <div className='grid'>
            <div className='col-12 lg:col-6'>
              <div
                className={`${restaurantVideoStyles.skrAboutText} flex align-item-center justify-content-center`}
              >
                <div className='skrVideoTitleFrame text-left'>
                  <h2 className='skrHeading '>Start Your Amazing Stay!</h2>
                  <p className='skrParagraph '>
                    Sagor Konna Resort is a Deluxe Hotel spectacularly designed
                    and added with traditional hospitality of courteous,
                    attractive and personalized service and is conveniently
                    located closest to the Beach, Where one can enjoy the Sea,
                    the Sunset and the waves of the Sea lying on the bed of our
                    Hotel.
                  </p>
                  <a
                    href='https://www.youtube.com/watch?v=wsq-r8lMMsk'
                    data-fancybox
                    className='skrButton skrButtonHref'
                  >
                    <Image
                      alt='icon'
                      className='playButtonImg skrZoom'
                      src={playBtn}
                      width={12}
                    />
                    <span>Watch Video</span>
                  </a>
                </div>
              </div>
            </div>
            <div className='col-12 lg:col-6'>
              <div className={restaurantVideoStyles.skrVideoFrame}>
                <Image
                  src={resVideoFrameImg}
                  alt='Video Frame Cover'
                  className={restaurantVideoStyles.skrVideoFrameCoverImg}
                />
                <a
                  data-fancybox=''
                  href='https://www.youtube.com/watch?v=wsq-r8lMMsk'
                  class={`${restaurantVideoStyles.skrPlayButton} flex align-items-center justify-content-center`}
                >
                  <i class='fas fa-play'></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantVideoComponent;
