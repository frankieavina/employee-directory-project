import React from 'react';

const Header = ({ type , children, className }) => {
  const HeaderEl = type;
  return <HeaderEl className={className}>{children}</HeaderEl>;
};

export default Header;
