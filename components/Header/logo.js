import Link from 'next/link';
import styled from 'styled-components';

const Logo = () => (
  <LogoStyles>
    <Link href="/">
      <a title="Allicin Design">
        <span>Allicin</span>
      </a>
    </Link>
  </LogoStyles>
);

const LogoStyles = styled.h1`
  background-color: ${props => props.theme.logoBackgroundColor};
  padding: 0 2rem;
  height: 6rem;
  font-weight: bold;
  display: flex;
  align-items: stretch;
  transform: skew(-10deg, 0deg);
  a {
    color: ${props => props.theme.headerLogoColor};
    font-family: fenway-park-jf, sans-serif;
    font-size: 3rem;
    font-style: normal;
    font-weight: 400;
    text-decoration: none;
  }
`;

export default Logo;
