import React, { createContext, useState } from 'react';
import useRoomData from '../hooks/useRoomData';

import serviceImg1 from '../public/images/services/service1bar.jpg';
import serviceImg2 from '../public/images/services/service2pool.jpg';
import serviceImg3 from '../public/images/services/service3restaurant.jpg';
import serviceImg4 from '../public/images/services/service4.jpg';
import serviceImg5 from '../public/images/services/service5.jpg';
import serviceImg6 from '../public/images/services/service6.jpg';

export const ContextApi = createContext();

const ContextProvider = ({ children }) => {
  // const hotelSummary = [
  //   {
  //     id: 1,
  //     viewNumber: 4,
  //     title: 'View',
  //   },
  //   {
  //     id: 2,
  //     viewNumber: 30,
  //     title: 'Rooms',
  //   },
  //   {
  //     id: 3,
  //     viewNumber: 6,
  //     title: 'Beaches',
  //   },
  //   {
  //     id: 4,
  //     viewNumber: 44586,
  //     title: 'Guests',
  //   },
  // ];

  // const restaurantSummary = [
  //   {
  //     id: 1,
  //     viewNumber: '400+',
  //     title: 'Guest Daily',
  //   },
  //   {
  //     id: 2,
  //     viewNumber: 3,
  //     title: 'Professional Chefs',
  //   },
  //   {
  //     id: 3,
  //     viewNumber: '600+',
  //     title: 'Orders Daily',
  //   },
  //   {
  //     id: 4,
  //     viewNumber: 1,
  //     title: 'Comfortable Halls',
  //   },
  // ];
  const services = [
    {
      id: 1,
      serviceName: 'Restaurant Lounge',
      serviceDesc:
        'Sagor Konna Resort has an in-house restaurant with all the sea food available!',
      serviceImg: serviceImg1,
    },
    {
      id: 2,
      serviceName: 'Swimming Pools',
      serviceDesc:
        'A wonderful swimming pool inside the hotel compound with sea view!',
      serviceImg: serviceImg2,
    },
    {
      id: 3,
      serviceName: 'Restaurant ',
      serviceDesc:
        'Official Restaurant of Sagor Konna Resort with all the sea foods available.',
      serviceImg: serviceImg3,
    },
    {
      id: 4,
      serviceName: 'Game Zone',
      serviceDesc:
        'Sagor Konna Resort has an in-house restaurant with all the sea food available!',
      serviceImg: serviceImg4,
    },
    {
      id: 5,
      serviceName: 'Relax Environment',
      serviceDesc:
        'Sagor Konna Resort has an in-house restaurant with all the sea food available!',
      serviceImg: serviceImg5,
    },
    {
      id: 6,
      serviceName: 'Upcoming Gym',
      serviceDesc:
        'Sagor Konna Resort has an in-house restaurant with all the sea food available!',
      serviceImg: serviceImg6,
    },
  ];

  const { skrRooms } = useRoomData;

  const data = {
    skrRooms,
    services,
    // hotelSummary,
    // restaurantSummary,
  };
  return <ContextApi.Provider value={data}>{children}</ContextApi.Provider>;
};

export default ContextProvider;
