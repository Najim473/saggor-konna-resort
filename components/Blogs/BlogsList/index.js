import React from 'react';
import SingleBlog from './SingleBlog';

const BlogList = ({ blogs }) => {
  return (
    <div className='p-container'>
      <div className='grid'>
        {blogs.map((singleBlog) => (
          <div key={singleBlog.key} className='col-12 md:col-6 lg:col-4'>
            <SingleBlog singleBlog={singleBlog} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
