import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import blogStyles from './HomeBlogs.module.css';

import blogImg1 from '../../../public/images/blogs/beachBlog1.jpg';
import blogImg2 from '../../../public/images/blogs/beachBlog2.jpg';
import blogImg3 from '../../../public/images/blogs/beachBlog3.jpg';
import blogAuthor1 from '../../../public/images/blogs/profile1.jpg';
import blogAuthor2 from '../../../public/images/blogs/profile2.jpg';
import time from '../../../public/images/blogs/time.svg';

const HomeBlogs = () => {
  const blogTextRef = useRef(null);

  //   for the view point animation

  const callBackFunc = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      blogTextRef.current.classList.add('skrAnimationScrollActiveEl');
      return;
    }
    blogTextRef?.current &&
      blogTextRef?.current.classList.remove('skrAnimationScrollActiveEl');
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    };

    const observer = new IntersectionObserver(callBackFunc, options);
    if (blogTextRef.current) observer.observe(blogTextRef.current);

    return () => {
      if (blogTextRef.current) observer.unobserve(blogTextRef.current);
    };
  }, [blogTextRef]);

  return (
    <div className={blogStyles.blogContainer}>
      <div class='p-container relative'>
        <div class='grid justify-content-center'>
          <div class='col-12 lg:col-12'>
            <div
              ref={blogTextRef}
              className='skrAnimationScroll text-center mb-6'
            >
              <div class='skrTitleFrame'>
                <h2 class='skrMb20 skrHeading'>Our Newsletter</h2>
                <p className='skrParagraph mt-6'>
                  Sagor Konna Resort also offers a stunning range of blogs for
                  all your needs. You can read about the beautiful Sagor Konna
                  Resort and side views of it. People can also know about
                  KuaKata.
                </p>
                <div>
                  <Link href='/about'>
                    <a className='skrButton mt-4'> Read More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 lg:col-4'>
            <div class='skrBlogCard'>
              <div class='skrCoverFrame'>
                <Image src={blogImg1} alt='cover' className='blogImage' />
              </div>
              <div class='skrDescriptionFrame'>
                <div class='skrRoomFeature'>
                  <div class='skrFeature'>
                    <div class='skrIconFrame skrIconAuthor'>
                      <Image
                        src={blogAuthor1}
                        alt='Profile Picture'
                        className='blogAuthor'
                      />
                    </div>
                    <span>Niloy Debnath</span>
                  </div>
                  <div class='skrFeature'>
                    <div class='skrIconFrame'>
                      <Image src={time} alt='time' />
                    </div>
                    <span>12.08.21 23:13</span>
                  </div>
                </div>
                <Link href='/blog'>
                  <a className='linkKajkam'>
                    <h4 class='skrMb20'>
                      See the sight of Kuakata with Sagor Konna Resort
                    </h4>
                  </a>
                </Link>

                <div class='skrTextLight'>
                  View here, at Sagor Konna Resort is amazing. People will able
                  to feel the Bay of Bengal in a different angle.
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 lg:col-4'>
            <div class='skrBlogCard'>
              <div class='skrCoverFrame'>
                <Image src={blogImg2} alt='cover' className='blogImage' />
              </div>
              <div class='skrDescriptionFrame'>
                <div class='skrRoomFeature'>
                  <div class='skrFeature'>
                    <div class='skrIconFrame skrIconAuthor'>
                      <Image
                        src={blogAuthor2}
                        alt='Profile Picture'
                        className='blogAuthor'
                      />
                    </div>
                    <span>Mubasserin Sadia</span>
                  </div>
                  <div class='skrFeature'>
                    <div class='skrIconFrame'>
                      <Image src={time} alt='time' />
                    </div>
                    <span>07.10.22 11:13</span>
                  </div>
                </div>
                <Link href='/blog'>
                  <a className='linkKajkam'>
                    <h4 class='skrMb20'>
                      Sagor Konna meets Sagor Konna in Kuakata
                    </h4>
                  </a>
                </Link>
                <div class='skrTextLight'>
                  Sagor Konna Resort is one of the best hotel to stay in
                  Kuakata. Kuakata is very beautiful place in Bangladesh to
                  visit.
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 lg:col-4'>
            <div class='skrBlogCard'>
              <div class='skrCoverFrame'>
                <Image src={blogImg3} alt='cover' className='blogImage' />
              </div>
              <div class='skrDescriptionFrame'>
                <div class='skrRoomFeature'>
                  <div class='skrFeature'>
                    <div class='skrIconFrame skrIconAuthor'>
                      <Image
                        src={blogAuthor1}
                        alt='Profile Picture'
                        className='blogAuthor'
                      />
                    </div>
                    <span>Hasan Ahmed</span>
                  </div>
                  <div class='skrFeature'>
                    <div class='skrIconFrame'>
                      <Image src={time} alt='time' />
                    </div>
                    <span>10.08.22 20:13</span>
                  </div>
                </div>
                <Link href='/blog'>
                  <a className='linkKajkam'>
                    <h4 class='skrMb20'>
                      Sagor Konna Resort will Surprise You in Different Ways
                    </h4>
                  </a>
                </Link>
                <div class='skrTextLight'>
                  Kuakata is a amazing place. Here in Kuakata, there is a
                  fabulous resort named Sagor Konna Resort where you will able
                  to spend your time effectively.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBlogs;
