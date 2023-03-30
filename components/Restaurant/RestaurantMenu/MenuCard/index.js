import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import resMenuStyles from '../RestaurantMenu.module.css';

const MenuCard = ({ menu, component }) => {
  const routeForMenu = useRouter();
  const routerPathName = routeForMenu.pathname;

  return (
    <div className='skeMenuCard'>
      <div class='skrCoverFrame skMenuCoverFrame'>
        <Image
          src={menu?.img}
          alt='cover'
          className='blogImage'
          layout='fill'
        />
        {component === 'special' && <div class='skrBadge'>Popular</div>}
      </div>
      <div class='skrDescriptionFrame'>
        <h3 className='skrMb20'>{menu?.title}</h3>
        <div className='skrTextLight skrMb20'>{menu?.description}</div>
        <div className='skrCardBottom flex justify-content-between align-items-center'>
          <div className='skrPrice'>
            {component === 'special' && <sup>{menu?.price + 400} </sup>}৳
            {menu?.price}
            <span> /person</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
