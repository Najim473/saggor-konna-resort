import Image from 'next/image';
import React from 'react';

import singleBlogStyles from './SingleBlogDetail.module.css';

import time from '../../../public/images/blogs/time.svg';

import basicImg1 from '../../../public/images/blogs/beachBlog1.jpg';
import basicImg2 from '../../../public/images/blogs/beachBlog2.jpg';

const SingleBlogDetail = ({ blog }) => {
  return (
    <div className='skr-p-50-80'>
      <div className='p-container'>
        <div className='grid justify-content-center'>
          <div className='col-12 lg:col-9'>
            <Image
              src={blog?.img}
              alt='Sagor Konna Blog Image'
              width='100%'
              height='65%'
              layout='responsive'
              className={singleBlogStyles.blogImage}
            />
            <div className={`${singleBlogStyles.blogFeatures} skrMb30 skrMt30`}>
              <div
                className={`${singleBlogStyles.blogFeature} flex align-items-center`}
              >
                <div
                  className={`${singleBlogStyles.skrIconAuthor} flex justify-content-center align-items-center`}
                >
                  <Image
                    src={blog?.profile}
                    alt='Profile Picture'
                    width={20}
                    height={20}
                  />
                </div>
                <span className={singleBlogStyles.featureTexts}>
                  {blog?.authorName}
                </span>
              </div>
              <div
                className={`${singleBlogStyles.blogFeature} flex align-items-center`}
              >
                <div
                  className={`${singleBlogStyles.skrIconAuthor} flex justify-content-center align-items-center`}
                >
                  <Image src={time} alt='time' width={20} height={20} />
                </div>
                <span className={singleBlogStyles.featureTexts}>
                  12.08.21 23:13
                </span>
              </div>
            </div>
            <div className={singleBlogStyles.blogPost}>
              <p class={`${singleBlogStyles.featureTexts} skrMb40`}>
                {blog?.blogPost1}
              </p>
              <blockquote className={`${singleBlogStyles.blockquote} skrMb40`}>
                While visiting Kuakata Sea Beach, we stayed at Sagor Konna
                Resort. Sagor Konna Resort and Restaurant is the best one to
                stay in Kuakata to me. They provides a very good service with
                top-noch security system and the food quality of their
                restaurant is amazing. I personally recommend Sagor Konna Resort
                to stay in Kuakata.
              </blockquote>
              <p className={singleBlogStyles.featureTexts}>{blog?.blogPost2}</p>
              <p className={`${singleBlogStyles.featureTexts} skrMb40`}>
                {blog?.blogPost3}
              </p>
              <div className='grid'>
                <div className='col-12 lg:col-6'>
                  <Image
                    src={basicImg1}
                    width='100%'
                    height='80%'
                    layout='responsive'
                    alt='alternative'
                    className={singleBlogStyles.blogSideImage}
                  />
                </div>
                <div className='col-12 lg:col-6'>
                  <Image
                    src={basicImg2}
                    width='100%'
                    height='80%'
                    layout='responsive'
                    alt='alternative'
                    className={singleBlogStyles.blogSideImage}
                  />
                </div>
              </div>
              <p className={`${singleBlogStyles.featureTexts} skrMb30`}>
                {blog?.blogPost4}
              </p>

              <p className={`${singleBlogStyles.featureTexts} skrMb10`}>
                {blog?.blogPost5}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogDetail;
