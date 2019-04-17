import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from '../../routes';
import Container from '../Container';
import Logo from '../Logo';
import Hamburger from './Hamburger';
import { DesktopLang } from './Language';
import Menu from './Menu';

const StyledNavbar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 64px;
  width: 100%;
  background-color: ${({ theme }) => theme.colorWhite};
  z-index: 100;

  > ${Container} {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Navbar = ({ open, lang }) => {
  const [menuOpen, setMenuOpen] = useState(open || false);
  return (
    <StyledNavbar>
      <Container>
        <Logo />

        <Hamburger cross={menuOpen} onClick={() => setMenuOpen(!menuOpen)} />
        <Menu open={menuOpen} close={() => setMenuOpen(false)} lang={lang} />
      </Container>
      <DesktopLang lang={lang} />
    </StyledNavbar>
  );
};

export default Navbar;