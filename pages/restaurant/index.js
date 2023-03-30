import Head from 'next/head';
import React from 'react';
import CustomerTestimonials from '../../components/Home/CustomerTestimonials';
import HomeBlogs from '../../components/Home/HomeBlogs';
import RestaurantGallery from '../../components/Restaurant/RestaurantGallery';
import RestaurantMenu from '../../components/Restaurant/RestaurantMenu';
import RestaurantSummary from '../../components/Restaurant/RestaurantSummary';
import RestaurantTeam from '../../components/Restaurant/RestaurantTeam';
import RestaurantVideoComponent from '../../components/Restaurant/RestaurantVideoComponent';
import TopBannerForRestaurnat from '../../components/Restaurant/TopBannerForRestaurnat';
import restaurantStyles from './Restaurant.module.css';

const Restaurant = ({ menuLists }) => {
  // console.log(menuLists);
  return (
    <div>
      <Head>
        <title>Restaurant Sagor Konna</title>
        <meta
          name='Restaurant description'
          content='Sagor Konna Resort is a fabulous resort  situated in Kuakata with a great restaurant, Bangladesh'
        />
        <link rel='icon' href='/favicon.ico' />
        {/* material icon of google  */}
      </Head>
      <main>
        <TopBannerForRestaurnat />
        <RestaurantMenu menuLists={menuLists} />
        <RestaurantGallery />
        <RestaurantSummary />
        <RestaurantTeam />
        <RestaurantVideoComponent />
        <CustomerTestimonials />
        <HomeBlogs />
      </main>
    </div>
  );
};

export default Restaurant;

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
