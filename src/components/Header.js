import React from 'react';
import { Icon } from '@iconify/react';
import feather from '@iconify/icons-mdi/feather';

const Header = () => {
  return (
    <>
      <header className='header'>
        <h1>
          <Icon icon={feather} className='header__icon' /> Earth Observatory Natural Event Tracker
          (NASA EONET)
        </h1>
      </header>
    </>
  );
};

export default Header;
