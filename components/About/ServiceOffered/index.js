import Image from 'next/image';
import React, { useRef } from 'react';
import serviceStyles from './ServiceOffered.module.css';

import car from '../../../public/images/TopBanner/car.svg';
import dine from '../../../public/images/TopBanner/dine.svg';
import ac from '../../../public/images/TopBanner/ac.svg';
import cc from '../../../public/images/TopBanner/cctv.svg';
import pool from '../../../public/images/services/5.svg';
import wifi from '../../../public/images/services/6.svg';
import tv from '../../../public/images/services/7.svg';
import laundry from '../../../public/images/services/8.svg';
import useInterception from '../../../hooks/useInterception';

const ServiceOffered = () => {
  const sagorServiceRef = useRef(null);

  const serviceDivRef = useRef(null);

  useInterception(serviceDivRef);

  const services = [
    {
      key: 1,
      name: 'Easy Transport',
      img: car,
    },
    {
      key: 2,
      name: 'Dine In',
      img: dine,
    },
    {
      key: 3,
      name: 'Air Conditioned',
      img: ac,
    },
    {
      key: 4,
      name: 'Under Protection',
      img: cc,
    },
    {
      key: 5,
      name: 'Private Pool',
      img: pool,
    },
    {
      key: 6,
      name: 'Free wi-fi',
      img: wifi,
    },
    {
      key: 7,
      name: 'Smart TV',
      img: tv,
    },
    {
      key: 8,
      name: 'Laundry',
      img: laundry,
    },
  ];
  return (
    <div className={serviceStyles.serviceOfferedContainer}>
      <div className='p-container'>
        <div className='grid'>
          <div className='col-12 lg:col-12'>
            <div className='skrAnimationScroll' ref={serviceDivRef}>
              <div className='skrTitleFrame text-center '>
                <h2 className='skrHeading'>What We Offer For You</h2>
                <p className='skrParagraph'>
                  Sagor Konna Resort offers a stunning range of beautiful rooms
                  and services for all of your needs. Our services are loved by
                  all of the guests.
                </p>
              </div>
            </div>
          </div>
          {services.map((service) => (
            <div key={service?.key} className='col-12 lg:col-3'>
              <div className='skrIconBox text-center'>
                <Image
                  src={service?.img}
                  alt='Sagor Konna Accomondation'
                  height={45}
                  width={45}
                  className='skrMb10'
                />
                <h5>{service?.name}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceOffered;
