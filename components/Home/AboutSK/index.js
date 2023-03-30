import Image from 'next/image';
import React from 'react';
import aboutSKStyles from './AboutSK.module.css';

import experience from '../../../public/images/aboutSKR/sagor konna.jpg';
import rooms from '../../../public/images/aboutSKR/about2.jpg';
import Link from 'next/link';

const AboutSK = () => {
  return (
    <section className={aboutSKStyles.aboutSKSection}>
      <div className='p-container'>
        <div className={aboutSKStyles.skAbout}>
          <div className='grid'>
            <div className='col-12 lg:col-6'>
              <div className={aboutSKStyles.skrAboutImgHolder}>
                <Image
                  src={experience}
                  alt='Sagor Konna Resort'
                  className={aboutSKStyles.skrAboutImg}
                />
              </div>
            </div>
            <div className='col-12 lg:col-6 align-content-center'>
              <div className={aboutSKStyles.skrAboutTextDivOne}>
                <div className={aboutSKStyles.skrAboutTextTitleFrame}>
                  <h2 className={aboutSKStyles.skrAboutTextHeadingOne}>
                    We have 17+ Years <br /> of Experience
                  </h2>
                  <p className={aboutSKStyles.skrAboutTextParaOne}>
                    Sagor Konna is located on Kuakata Sea Beach, Kuakata with
                    lush green garden rise from the east and endless sea
                    stretching on the west, the resort offers panoramic visuals
                    of Bay of Bengal. Nestled in the heart of nature along a
                    natural sandy beach, the resort is spread over 5 acres,
                    located 10 minutes away from the hustle of the Kuakata city
                    with easy accessibility to all the major tourist.
                  </p>
                  <div>
                    <Link href='/about'>
                      <a className={aboutSKStyles.aboutButton}>More About Us</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 lg:col-6 align-content-center'>
              <div className={aboutSKStyles.skrAboutTextDivOne}>
                <div className={aboutSKStyles.skrAboutTextTitleFrame}>
                  <h2 className={aboutSKStyles.skrAboutTextHeadingOne}>
                    Start your Amazing Adventure!
                  </h2>
                  <p className={aboutSKStyles.skrAboutTextParaOne}>
                    Sagor Konna Resort offers 25 luxuriously appointed rooms &
                    suites with comfort of kitchenette, branded amenities, and
                    balconies with panoramic view of sea and garden.
                  </p>
                  <div>
                    <Link href='/room'>
                      <a className={aboutSKStyles.aboutButton}>Choose A Room</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 lg:col-6'>
              <div className={aboutSKStyles.skrAboutImgHolder}>
                <Image
                  src={rooms}
                  alt='Sagor Konna Resort Room'
                  className={aboutSKStyles.skrAboutImg}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSK;
