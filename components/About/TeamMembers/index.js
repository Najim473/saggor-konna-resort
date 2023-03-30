import Image from 'next/image';
import React from 'react';
import teamStyles from './TeamMember.module.css';
import md from '../../../public/images/hotelManagement/1.jpg';
import ceo from '../../../public/images/hotelManagement/2.jpg';
import manager from '../../../public/images/hotelManagement/3.jpg';
import chef from '../../../public/images/hotelManagement/4.jpg';

const TeamMembers = () => {
  const hotelManagement = [
    {
      id: 1,
      position: 'Managing Director',
      name: 'Monir Hawladar',
      img: ceo,
    },
    {
      id: 2,
      position: 'Chief Administrator',
      name: 'Sanjida Haque',
      img: md,
    },
    {
      id: 3,
      position: 'Manager',
      name: 'Sakira Akter',
      img: manager,
    },
    {
      id: 4,
      position: 'Head Chef',
      name: 'Monalisa Kakoli',
      img: chef,
    },
  ];
  return (
    <div className='skr-p-0-60'>
      <div className='p-container'>
        <div className='grid'>
          <div className='col-12'>
            <div className='text-center skrTitleFrame'>
              <h2 className='skrHeading'>Our Awesome Team</h2>
              <p className='skrParagraph'>
                We are very happu to announce you that Sagor Konna Resort is
                managed very well by the professionals. The management here have
                more than 30 years of experience and good reputations around the
                globe. We are happy to serve you anytime of the years.
              </p>
            </div>
          </div>
          {hotelManagement.map((managementPerson) => (
            <div key={managementPerson.id} className='col-12 md:col-6 lg:col-3'>
              <div className={`${teamStyles.teamCard}`}>
                <div className={`${teamStyles.photoFrame}`}>
                  <Image
                    src={managementPerson?.img}
                    alt='Managing Director'
                    className={teamStyles.managementImg}
                  />
                </div>
                <div className={`${teamStyles.teamMemberDesc}`}>
                  <h3 className='skrMb10'>{managementPerson.name}</h3>
                  <div className={teamStyles.teamMemberPosition}>
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

export default TeamMembers;
