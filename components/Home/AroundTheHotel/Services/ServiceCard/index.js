import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import aroundTheHotelStyles from '../../AroundTheHotel.module.css';

const ServiceCard = ({ service }) => {
  return (
    <>
      <div className='col-12 lg:col-4'>
        <div className=''>
          <div className={aroundTheHotelStyles.skrAthCard}>
            <div className={aroundTheHotelStyles.skrCoverFrame}>
              <Image
                src={service?.serviceImg}
                alt='sagor konna resort'
                className={aroundTheHotelStyles.skrCoverFrameImg}
                layout='fill'
              />
            </div>
            <div class={aroundTheHotelStyles.skrCardDescription}>
              <h4 class='skrMb10'>{service?.serviceName}</h4>
              <p>{service?.serviceDesc}</p>
              <div>
                <Link href='/about'>
                  <a className='skrButton'> Read More</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
