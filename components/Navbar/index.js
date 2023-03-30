import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import MenuList from './MenuList';
// import '../../styles/Navbar.css';
import skrLogo from '../../public/images/SagorKonnaLogoBG.png';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = (a) => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const menuList = [
    // {
    //   title: 'Restaurant',
    //   path: '/',
    //   cName: 'nav-links',
    //   subMenu: [
    //     {
    //       title: 'Dine In',
    //       path: '/dineIn',
    //       cName: 'dropdown-link',
    //     },
    //     {
    //       title: 'Room Service',
    //       path: '/roomService',
    //       cName: 'dropdown-link',
    //     },
    //   ],
    // },
    {
      title: 'Gallery',
      path: '/gallery',
      cName: 'nav-links',
      subMenu: [
        {
          title: 'Photo Gallery',
          path: '/gallery/photoGallery',
          cName: 'dropdown-link',
        },
        {
          title: 'Video Gallery',
          path: '/gallery/videoGallery',
          cName: 'dropdown-link',
        },
      ],
    },
  ];
  return (
    <>
      <nav className='navbar'>
        <Link href='/' className='navbar-logo' onClick={closeMobileMenu}>
          {/* NRB GLobal
          <i className='fab fa-firstdraft' /> */}
          <Image
            src={skrLogo}
            alt='logo of NRB'
            height='70px'
            width='75px'
            className='logoNRB'
          />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link href='/'>
              <a className='nav-links' onClick={closeMobileMenu}>
                {' '}
                Home
              </a>
            </Link>
          </li>
          <li className='nav-item'>
            <Link href='/about'>
              <a className='nav-links' onClick={closeMobileMenu}>
                {' '}
                About
              </a>
            </Link>
          </li>
          <li className='nav-item'>
            <Link href='/rooms'>
              <a className='nav-links' onClick={closeMobileMenu}>
                {' '}
                Rooms
              </a>
            </Link>
          </li>
          <li className='nav-item'>
            <Link href='/restaurant'>
              <a className='nav-links' onClick={closeMobileMenu}>
                {' '}
                Restaurant
              </a>
            </Link>
          </li>
          {menuList.map((menu) => (
            <MenuList
              key={menu.title}
              menu={menu}
              closeMobileMenu={closeMobileMenu}
            />
          ))}
          <li className='nav-item'>
            <Link href='/offers' className='nav-links'>
              <a className='nav-links' onClick={closeMobileMenu}>
                {' '}
                Offers
              </a>
            </Link>
          </li>
          <li className='nav-item'>
            <Link href='/membership'>
              <a className='nav-links' onClick={closeMobileMenu}>
                {' '}
                Member
              </a>
            </Link>
          </li>
          <li className='nav-item'>
            <Link href='/blogs'>
              <a className='nav-links' onClick={closeMobileMenu}>
                {' '}
                Blogs
              </a>
            </Link>
          </li>
          <li className='nav-item'>
            <Link href='/contact' className='nav-links'>
              <a className='nav-links' onClick={closeMobileMenu}>
                {' '}
                Contact
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
