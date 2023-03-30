import React from 'react';
import commentStyles from './SingleBlogComments.module.css';

import reviewImg1 from '../../../public/images/blogs/profile1.jpg';
import reviewImg2 from '../../../public/images/blogs/profile2.jpg';
import Image from 'next/image';

const SingleBlogComments = () => {
  return (
    <div className='p-container'>
      <div className='grid justify-content-center'>
        <div className='col-12 lg:col-9'>
          <div className='skrMb30'>
            <div className='grid'>
              <div className='col-12'>
                <h3 className='skrMb40'>Comments</h3>
              </div>
              <div className='col-12'>
                <div className={`${commentStyles.skrReviewCard}`}>
                  <div
                    className={`${commentStyles.cardHeader} flex align-items-center justify-content-between`}
                  >
                    <div
                      className={`${commentStyles.nameNPhoto} flex align-items-center`}
                    >
                      <div className={commentStyles.avatarFrame}>
                        <Image src={reviewImg1} alt='Profile Image' />
                      </div>
                      <div className={commentStyles.extraDate}>
                        <h5>Niloy Siddiqui</h5>
                        <span>14.07.2021</span>
                      </div>
                    </div>
                    <ul className='skrStars flex'>
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
                  </div>
                  <blockquote>
                    Great service even though the Resort is still being
                    renovated, rooms are spacious, comfortable and clean.
                    Quality of service is sure to advance alongside the
                    construction and completion of the Resort and surrounding
                    areas.
                  </blockquote>
                </div>
              </div>
              <div className='col-12'>
                <div className={`${commentStyles.skrReviewCard}`}>
                  <div
                    className={`${commentStyles.cardHeader} flex align-items-center justify-content-between`}
                  >
                    <div
                      className={`${commentStyles.nameNPhoto} flex align-items-center`}
                    >
                      <div className={commentStyles.avatarFrame}>
                        <Image src={reviewImg2} alt='Profile Image' />
                      </div>
                      <div className={commentStyles.extraDate}>
                        <h5>Tariq Aziz</h5>
                        <span>14.09.2022</span>
                      </div>
                    </div>
                    <ul className='skrStars flex'>
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
                  </div>
                  <blockquote>
                    Great service even though the Resort is still being
                    renovated, rooms are spacious, comfortable and clean.
                    Quality of service is sure to advance alongside the
                    construction and completion of the Resort and surrounding
                    areas.
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogComments;
