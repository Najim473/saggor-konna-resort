import Image from 'next/image';
import React from 'react';
import directorStyles from './DirectorSpeech.module.css';

import author from '../../../public/images/author.png';

import signature from '../../../public/images/signature.png';

const DirectorSpeech = () => {
  return (
    <div className={directorStyles.directorSpeechContainer}>
      <div className='p-container'>
        <div className='grid'>
          <div className='col-12'>
            <div className='skrQuoteWithAuthor'>
              <div className='grid align-items-center'>
                <div className='col-12 lg:col-4'>
                  <div className='skrPhotoFrame'>
                    <Image
                      src={author}
                      className='skrAuthorPhoto'
                      alt='Sagor Konna Director'
                    />
                  </div>
                </div>
                <div className='col-12 lg:col-8'>
                  <blockquote class='directorSpeechQuote'>
                    Everyone would like to be treated like at home in the hotel,
                    and at home - like in a hotel. Hospitality is a quality that
                    is made up of primeval simplicity and antique grandeur. Here
                    in Sagor Konna everyone can enjoy his/her stay in.
                  </blockquote>
                  <div className='skrQuoteBottom'>
                    <div>
                      <h4 class=''>Shanzida Haque</h4>
                      <p className='skrParagraphOnly'>
                        Chief Executive Officer
                      </p>
                    </div>
                    <div className='skrQuoteSignImage'>
                      <Image
                        src={signature}
                        alt='Sagor Konna Director Sign'
                        className='skrSingImg'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectorSpeech;
