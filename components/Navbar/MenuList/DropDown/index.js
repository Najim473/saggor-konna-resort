import Link from 'next/link';
import React, { useState } from 'react';
// import '../../../../styles/DropDown.css';

const DropDown = ({ field, closeMobileMenu }) => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const onClickFuncs = () => {
    setClick(false);
    if (window.innerWidth < 960) {
      closeMobileMenu();
    }
  };
  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {field.map((item, index) => {
          return (
            <li key={index}>
              <Link href={item.path}>
                <a className={item.cName} onClick={onClickFuncs}>
                  {' '}
                  {item.title}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default DropDown;
