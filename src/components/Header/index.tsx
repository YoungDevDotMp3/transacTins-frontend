import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => (
  <Container size={size}>
    <header>
      <img src={Logo} alt="GoFinances" />
      <nav>
        <Link to="/">
          Listagem
          <div
            className="bar"
            style={{
              background:
                window.location.pathname === '/import' ? '#5636D3' : '',
            }}
          />
        </Link>
        <Link to="/import">
          Importar
          <div
            className="bar"
            style={{
              background:
                window.location.pathname === '/import' ? '' : '#5636D3',
            }}
          />
        </Link>
      </nav>
    </header>
  </Container>
);

export default Header;
