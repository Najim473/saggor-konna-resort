import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';
import aroundTheHotelStyles from '../AroundTheHotel.module.css';

import sagorKonnaService1 from '../../../../public/images/services/service1bar.jpg';

import sagorKonnaService2 from '../../../../public/images/services/service2pool.jpg';

import sagorKonnaService3 from '../../../../public/images/services/service3restaurant.jpg';
import useDataContext from '../../../../hooks/useDataContext';
import ServiceCard from './ServiceCard';
import { useRouter } from 'next/router';

const Services = () => {
  const serviceCardRef = useRef(null);

  const router = useRouter();
  const routerPath = router.pathname;
  // console.log(router.pathname);

  const { services } = useDataContext();

  //   console.log(services);

  if (routerPath === '/') {
    return (
      <>
        {services.slice(0, 3).map((service) => (
          <ServiceCard key={service?.id} service={service} />
        ))}
      </>
    );
  } else {
    return (
      <>
        {services.map((service) => (
          <ServiceCard key={service?.id} service={service} />
        ))}
      </>
    );
  }
};

export default Services;
