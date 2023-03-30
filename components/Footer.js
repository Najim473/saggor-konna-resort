import Image from 'next/image';
import React from 'react';
import footerStyles from '../styles/footer.module.css';
import skrLogo from '../public/images/SagorKonnaLogoBG.png';
import Link from 'next/link';

import footerImg1 from '../public/images/footerGallery/1.jpg';
import footerImg2 from '../public/images/footerGallery/2.jpg';
import footerImg3 from '../public/images/footerGallery/3.jpg';
import footerImg4 from '../public/images/footerGallery/4.jpg';
import footerImg5 from '../public/images/footerGallery/5.jpg';
import footerImg6 from '../public/images/footerGallery/6.jpg';

import kajkamLogo from '../public/images/kajkamlogo.png';
import kajkamLogoNew from '../public/images/kajkamlogoNew.png';
import kajkamLogoNew1 from '../public/images/kajkamLogoNew1.png';
import kajkamSVG from '../public/images/kajkamlogoLighter.svg';

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.skrFooter}>
        <div className={`${footerStyles.skrFooterPadding} p-container`}>
          <div className='grid'>
            <div className='md:col-6 lg:col-4 col-12'>
              <div className={footerStyles.skrFooterLogo}>
                <div className={`${footerStyles.footerLogo}`}>
                  <Image src={skrLogo} alt='Sagor Konna Resort' />
                </div>
              </div>
              <div className={footerStyles.skrFooterAbout}>
                Sagor Konna Resort offers a blend of eastern and western
                hospitality in an atmosphere of timeless elegance, beyond
                comfortable, stylish rooms and unmatched natural view.
              </div>
              <div className={footerStyles.skrFooterSocialLinks}>
                <a
                  href='https://www.facebook.com/sagorkonnaresortltd'
                  target='_blank'
                  rel='noreferrer'
                  className={`${footerStyles.fbLink} linkKajkam`}
                >
                  <i className='pi pi-facebook text-xl'></i>
                </a>
                <a
                  href='https://www.facebook.com/sagorkonnaresortltd'
                  target='_blank'
                  rel='noreferrer'
                  className={`${footerStyles.twitter}`}
                >
                  <i className='pi pi-twitter text-xl'></i>
                </a>
                <a
                  href='https://www.facebook.com/sagorkonnaresortltd'
                  target='_blank'
                  rel='noreferrer'
                  className={`${footerStyles.youtube}`}
                >
                  <i className='pi pi-youtube text-xl'></i>
                </a>
                <a
                  href='https://www.facebook.com/sagorkonnaresortltd'
                  target='_blank'
                  rel='noreferrer'
                  className={`${footerStyles.instagram}`}
                >
                  <i className='pi pi-instagram text-xl'></i>
                </a>
                <a
                  href='https://www.facebook.com/sagorkonnaresortltd'
                  target='_blank'
                  rel='noreferrer'
                  className={`${footerStyles.linkedin}`}
                >
                  <i className='pi pi-linkedin text-xl'></i>
                </a>
              </div>
            </div>
            <div className='col-12 md:col-6 lg:col-2'>
              <h4 className={footerStyles.menuList}>Menu</h4>
              <ul className={`${footerStyles.footerMenu}`}>
                <li>
                  <Link href='/'>
                    <a className={`${footerStyles.footerLinkPages} linkKajkam`}>
                      Home
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='/about'>
                    <a className={`${footerStyles.footerLinkPages} linkKajkam`}>
                      About Us
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='/room'>
                    <a className={`${footerStyles.footerLinkPages} linkKajkam`}>
                      Rooms
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='/offers'>
                    <a className={`${footerStyles.footerLinkPages} linkKajkam`}>
                      Our Services
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='/contact'>
                    <a className={`${footerStyles.footerLinkPages} linkKajkam`}>
                      Contact Info
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className='col-12 md:col-6 lg:col-3 my-5 md:my-3 lg:my-0'>
              <h4 className={footerStyles.menuList}>Sagor Konna Resort</h4>
              <ul className={`${footerStyles.footerMenu}`}>
                <li>
                  <Link href='/about'>
                    <a className={`${footerStyles.footerLinkPages} linkKajkam`}>
                      Terms and conditions
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='/about'>
                    <a className={`${footerStyles.footerLinkPages} linkKajkam`}>
                      Privacy policy
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='/about'>
                    <a className={`${footerStyles.footerLinkPages} linkKajkam`}>
                      Help center
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='/about'>
                    <a className={`${footerStyles.footerLinkPages} linkKajkam`}>
                      Work with us
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='/contact'>
                    <a className={`${footerStyles.footerLinkPages} linkKajkam`}>
                      Sitemap
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className='col-12 md:col-6 lg:col-3'>
              <h4 className={footerStyles.menuList}>Gallery</h4>
              <div className={footerStyles.footerGallery}>
                <Link href='/gallery'>
                  <a className={`${footerStyles.galleryLink}`}>
                    <div className={footerStyles.footerImage}>
                      <Image
                        src={footerImg1}
                        alt='footer gallery'
                        // width='100%'
                      />
                    </div>
                  </a>
                </Link>
                <Link href='/gallery'>
                  <a className={`${footerStyles.galleryLink}`}>
                    <div className={footerStyles.footerImage}>
                      <Image src={footerImg2} alt='footer gallery' />
                    </div>
                  </a>
                </Link>
                <Link href='/gallery'>
                  <a className={`${footerStyles.galleryLink}`}>
                    <div className={footerStyles.footerImage}>
                      <Image src={footerImg3} alt='footer gallery' />
                    </div>
                  </a>
                </Link>
                <Link href='/gallery'>
                  <a className={`${footerStyles.galleryLink}`}>
                    <div className={footerStyles.footerImage}>
                      <Image src={footerImg4} alt='footer gallery' />
                    </div>
                  </a>
                </Link>
                <Link href='/gallery'>
                  <a className={`${footerStyles.galleryLink}`}>
                    <div className={footerStyles.footerImage}>
                      <Image src={footerImg5} alt='footer gallery' />
                    </div>
                  </a>
                </Link>
                <Link href='/gallery'>
                  <a className={`${footerStyles.galleryLink}`}>
                    <div className={footerStyles.footerImage}>
                      <Image src={footerImg6} alt='footer gallery' />
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={`${footerStyles.skrCopyRight}`}>
          <div className={`${footerStyles.skrCopyRightContainer} p-container`}>
            <div className='copyText mb-4 md:mb-0'>
              © 2022 Sagor Konna Resort. All Rights Reserved.
            </div>
            <div className='copyMenu'>
              <a
                href='https://kajkaminitiative.com/'
                target='_blank'
                rel='noreferrer'
                className={`${footerStyles.kajkamWebLink} linkKajkam flex flex-column align-items-start justify-content-center`}
              >
                <span className={`${footerStyles.developedByText} ml-4 mb-1`}>
                  Developed By
                </span>
                <span>
                  <Image
                    src={kajkamSVG}
                    alt='Kajkam Initiative (www.kajkaminitiative.com)'
                    width={180}
                    height={58}
                  />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
