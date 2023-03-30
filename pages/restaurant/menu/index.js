import React from 'react';
import CustomerTestimonials from '../../../components/Home/CustomerTestimonials';
import MenuListToShow from '../../../components/Menu/MenuListToShow';
import SpecialMenu from '../../../components/Menu/SpecialMenu';

const Menu = ({ menuLists }) => {
  // console.log(menuLists);
  return (
    <div className='mt-6'>
      <MenuListToShow menuLists={menuLists} />
      <SpecialMenu menuLists={menuLists} />
      <CustomerTestimonials />
    </div>
  );
};

//index page for menu contain only menus

export default Menu;

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/menuListData', {
    accept: 'application/json',
  });
  // console.log(res);
  const menuLists = await res.json();
  return {
    props: { menuLists: menuLists },
  };
}
