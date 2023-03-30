import React, { useRef } from 'react';
import CountUp from 'react-countup';
import useInterception from '../../../hooks/useInterception';
import restaurantStyles from './RestaurantSummary.module.css';

const RestaurantSummary = () => {
  const restaurantRef = useRef(null);

  useInterception(restaurantRef);

  return (
    <div className={restaurantStyles.restaurantSummarySection}>
      <div className='p-container '>
        <div ref={restaurantRef} className=' skrAnimationScroll text-center'>
          <div className={`${restaurantStyles.skrFeaturedCard}`}>
            <div class={`${restaurantStyles.skrFeaturedGrid} grid `}>
              <div class='col-6 lg:col-3'>
                <div class={`${restaurantStyles.skrIconBox}`}>
                  <div
                    class={`${restaurantStyles.skrCounterNumber} skrMb10`}
                    data-count='4'
                  >
                    <CountUp duration={2} end={4} enableScrollSpy />
                  </div>
                  <h5>Views</h5>
                </div>
              </div>
              <div class='col-6 lg:col-3'>
                <div class={`${restaurantStyles.skrIconBox}`}>
                  <div class={`${restaurantStyles.skrCounterNumber} skrMb10`}>
                    <CountUp duration={2} end={30} enableScrollSpy />
                  </div>

                  <h5>Rooms</h5>
                </div>
              </div>
              <div class='col-6 lg:col-3'>
                <div class={`${restaurantStyles.skrIconBox}`}>
                  <div
                    class={`${restaurantStyles.skrCounterNumber} skrMb10`}
                    data-count='6'
                  >
                    <CountUp duration={2} end={6} enableScrollSpy />
                  </div>
                  <h5>Beaches</h5>
                </div>
              </div>
              <div class='col-6 lg:col-3'>
                <div class={`${restaurantStyles.skrIconBox}`}>
                  <div
                    class={`${restaurantStyles.skrCounterNumber} skrMb10`}
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

export default RestaurantSummary;
