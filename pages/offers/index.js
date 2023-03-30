import React from 'react';
import CustomerTestimonials from '../../components/Home/CustomerTestimonials';
import OfferList from '../../components/Offers/OfferList';
import OfferTopBanner from '../../components/Offers/OfferTopBanner';
import SagorKonnaCommon from '../../components/Offers/SagorKonnaCommon';

const Offers = ({ offer }) => {
  console.log(offer);
  return (
    <div>
      <OfferTopBanner />
      <OfferList offer={offer} />
      <SagorKonnaCommon />
      <CustomerTestimonials />
    </div>
  );
};

export default Offers;

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/offer');
  const offer = await res.json();

  return {
    props: {
      offer,
    },
  };
}
