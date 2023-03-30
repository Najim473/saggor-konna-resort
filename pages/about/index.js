import Head from 'next/head';
import React from 'react';
import DirectorSpeech from '../../components/About/DirectorSpeech';
import ServiceOffered from '../../components/About/ServiceOffered';
import TeamMembers from '../../components/About/TeamMembers';
import VIdeoComponent from '../../components/About/VIdeoComponent';
import AroundTheHotel from '../../components/Home/AroundTheHotel';
import CustomerTestimonials from '../../components/Home/CustomerTestimonials';
import HomeBlogs from '../../components/Home/HomeBlogs';
import aboutStyles from './about.module.css';

const About = () => {
  return (
    <div>
      <Head>
        <title>About Sagor Konna Resort</title>
        <meta
          name='description'
          content='Sagor Konna Resort is a fabulous resort  situated in Kuakata, Bangladesh'
        />
        <link rel='icon' href='/favicon.ico' />
        {/* material icon of google  */}
      </Head>
      <main>
        <div className={aboutStyles.aboutContainer}>
          <div className='p-container'>
            <div className='skrTitleFrame text-center'>
              <h1 className='skrHeadings text-3xl md:text-6xl font-bold'>
                About Our Sagor Konna Resort
              </h1>
              <h4 className='skrSubHeading my-4'>
                WHATEVER THE <span className='subHeadingSpan'>SEASON</span> ,
                HOWEVER THE <span className='subHeadingSpan'>MOMENT</span> , WE
                ALWAYS <span className='subHeadingSpan'>WELCOME </span>
                YOU
              </h4>
              <p className='skrParagraph'>
                Sagor Konna Resort is a Deluxe Hotel spectacularly designed and
                added with traditional hospitality of courteous, attractive and
                personalized service and is conveniently located closest to the
                Beach, Where one can enjoy the Sea, the Sunset and the waves of
                the Sea lying on the bed of our Hotel.
              </p>
            </div>
            {/* director speech  */}
            <DirectorSpeech />
            {/* service components  */}
            <ServiceOffered />
            {/* video component  */}
            <VIdeoComponent />
            {/* Management  */}
            <TeamMembers />
            {/* services  */}
            <AroundTheHotel />
            {/* testimonials  */}
            <CustomerTestimonials />
            {/* blogs  */}
            <HomeBlogs />
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
