import React, { useRef } from 'react';
import useInterception from '../../../hooks/useInterception';
import MenuCard from '../../Restaurant/RestaurantMenu/MenuCard';
import menuListStyles from './MenuListToShow.module.css';

const MenuListToShow = ({ menuLists }) => {
  const menuTitleRef = useRef(null);

  useInterception(menuTitleRef);

  // console.log(menuLists);

  return (
    <div className={menuListStyles.MenuListContainer}>
      <div className='p-container'>
        <div ref={menuTitleRef} className='skrTitleFrame skrAnimationScroll'>
          <h1 className={`${menuListStyles.skrHeading} text-4xl md:text-7xl`}>
            Our Restaurant Menu with touch of locality.
          </h1>
          <p className='skrParagraph'>
            Consectetur adipisicing elit. Nihil, illum voluptate eveniet ex
            fugit ea delectus, sed voluptatem. Laborum accusantium libero
            commodi id officiis itaque esse adipisci, necessitatibus asperiores,
            illo odio.
          </p>
        </div>
        <section>
          <div className='menuRender skr-p-0-80 pt-4'>
            <div className='grid'>
              {menuLists?.map((menu) => (
                <div key={menu.id} className='col-12 md:col-6 lg:col-4'>
                  <MenuCard menu={menu} key={menu.id} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* menu title  */}
    </div>
  );
};

export default MenuListToShow;
