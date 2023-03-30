import React, { useRef } from 'react';
import useInterception from '../../../hooks/useInterception';
import blogHeaderStyles from './BlogHeader.module.css';

const BlogHeader = () => {
  const blogTitleRef = useRef(null);

  useInterception(blogTitleRef);

  return (
    <div className={blogHeaderStyles.blogHeaderContainer}>
      <div className='p-container'>
        <div ref={blogTitleRef} className='skrTitleFrame skrAnimationScroll'>
          <h1 className={`${blogHeaderStyles.skrHeading} text-4xl md:text-7xl`}>
            Our Restaurant Menu with touch of locality.
          </h1>
          <p className='skrParagraph'>
            Consectetur adipisicing elit. Nihil, illum voluptate eveniet ex
            fugit ea delectus, sed voluptatem. Laborum accusantium libero
            commodi id officiis itaque esse adipisci, necessitatibus asperiores,
            illo odio.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
