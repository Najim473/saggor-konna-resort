import React from 'react';
import blogHeadStyles from './SingleBlogHeader.module.css';

const SingleBlogHeader = ({ blog }) => {
  return (
    <div className={blogHeadStyles.blogHeadContainer}>
      <div className='p-container'>
        <div className='grid'>
          <div className='col-12'>
            <div className='text-center'>
              <h1 className='skrHeading text-4xl md:text-7xl'>{blog?.title}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogHeader;
