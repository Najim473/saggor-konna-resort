import React, { useEffect, useRef } from 'react';
import hotelSummaryStyles from './HotelSummarySection.module.css';
import CountUp from 'react-countup';

const HotelSummarySection = ({ summaryData }) => {
  const roomDetailRef = useRef(null);

  const callBackFunc = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      roomDetailRef.current.classList.add('skrAnimationScrollActiveEl');
      return;
    }
    // console.log(roomDetailRef.current.classList);
    roomDetailRef.current &&
      roomDetailRef.current.classList.remove('skrAnimationScrollActiveEl');
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    };

    const observer = new IntersectionObserver(callBackFunc, options);
    if (roomDetailRef.current) {
      observer.observe(roomDetailRef.current);
    }

    return () => {
      if (roomDetailRef.current) {
        observer.unobserve(roomDetailRef.current);
      }
    };
  }, [roomDetailRef]);

  return (
    <div className={hotelSummaryStyles.hotelSummarySection}>
      <div className='p-container '>
        <div ref={roomDetailRef} className=' skrAnimationScroll text-center'>
          <div className={`${hotelSummaryStyles.skrFeaturedCard}`}>
            <div class={`${hotelSummaryStyles.skrFeaturedGrid} grid `}>
              <div class='col-6 lg:col-3'>
                <div class={`${hotelSummaryStyles.skrIconBox}`}>
                  <div
                    class={`${hotelSummaryStyles.skrCounterNumber} skrMb10`}
                    data-count='4'
                  >
                    <CountUp duration={2} end={4} enableScrollSpy />
                  </div>
                  <h5>Views</h5>
                </div>
              </div>
              <div class='col-6 lg:col-3'>
                <div class={`${hotelSummaryStyles.skrIconBox}`}>
                  <div class={`${hotelSummaryStyles.skrCounterNumber} skrMb10`}>
                    <CountUp duration={2} end={30} enableScrollSpy />
                  </div>

                  <h5>Rooms</h5>
                </div>
              </div>
              <div class='col-6 lg:col-3'>
                <div class={`${hotelSummaryStyles.skrIconBox}`}>
                  <div
                    class={`${hotelSummaryStyles.skrCounterNumber} skrMb10`}
                    data-count='6'
                  >
                    <CountUp duration={2} end={6} enableScrollSpy />
                  </div>
                  <h5>Beaches</h5>
                </div>
              </div>
              <div class='col-6 lg:col-3'>
                <div class={`${hotelSummaryStyles.skrIconBox}`}>
                  <div
                    class={`${hotelSummaryStyles.skrCounterNumber} skrMb10`}
                    data-count='4586'
                  >
                    <CountUp
                      duration={2}
                      start={10000}
                      end={44586}
                      enableScrollSpy
                      separator=','
                    />
                  </div>
                  <h5>Guests</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelSummarySection;
