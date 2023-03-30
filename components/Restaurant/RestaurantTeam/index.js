import Image from 'next/image';
import React from 'react';

import resTeamStyles from './RestaurantTeam.module.css';

const RestaurantTeam = () => {
  const restaurantMangement = [
    {
      id: 1,
      name: 'Kuddus Rahman',
      position: 'Head Chef',
      img: '/images/restaurant/chef1.jpg',
    },
    {
      id: 2,
      name: 'Pranteek Ahmed',
      position: ' Chef',
      img: '/images/restaurant/chef2.jpg',
    },
    {
      id: 3,
      name: 'Sah Gupta',
      position: 'Junior Chef',
      img: '/images/restaurant/chef3.jpg',
    },
  ];
  return (
    <div className='skr-p-0-60'>
      <div className='p-container'>
        <div className='grid'>
          <div className='col-12'>
            <div className='text-center skrTitleFrame'>
              <h2 className='skrHeading'>They are Ready to treat You!</h2>
              <p className='skrParagraph'>
                We are very happu to announce you that Sagor Konna Restaurant is
                managed very well by the professional chefs. The chef management
                here have more than 30 years of experience and good reputations
                around the globe. We are happy to serve you anytime of the
                years.
              </p>
            </div>
          </div>
          {restaurantMangement.map((managementPerson) => (
            <div key={managementPerson.id} className='col-12 md:col-6 lg:col-4'>
              <div className={`${resTeamStyles.teamCard}`}>
                <div className={`${resTeamStyles.photoFrame}`}>
                  <Image
                    src={managementPerson?.img}
                    alt='Managing Director'
                    className={resTeamStyles.managementImg}
                    layout='fill'
                  />
                </div>
                <div className={`${resTeamStyles.teamMemberDesc}`}>
                  <h3 className='skrMb10'>{managementPerson.name}</h3>
                  <div className={resTeamStyles.teamMemberPosition}>
                    {managementPerson?.position}
                  </div>
                  <ul class='memberSocial flex'>
                    <li>
                      <a href='#.'>
                        <i class='fab fa-facebook-f'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#.'>
                        <i class='fab fa-instagram'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#.'>
                        <i class='fab fa-twitter'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#.'>
                        <i class='fab fa-youtube'></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantTeam;
