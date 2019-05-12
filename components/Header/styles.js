import styled from 'styled-components';

import media from '../MediaQueries';

const HeaderStyles = styled.header`
  background-color: ${props => props.theme.headerBackground};
  width: 100%;
  height: 6rem;
  border-bottom: 0.1rem solid ${props => props.theme.headerBorderBt};
  position: fixed;
  z-index: 200;
  ul.nav__global--list {
    display: flex;
    li {
      padding: 0 0 0 2rem;
    }

    a {
      color: ${props => props.theme.globalNavLinksColor};
      &:hover {
        color: ${props => props.theme.globalNavHover};
      }
    }
  }

  nav.nav__global {
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${media.brotherbear`
      padding-left: calc(50vw - 512px - 20px);
      padding-right: calc(50vw - 512px - 20px);
   `}
  }

  li.nav__global--list-item.toggle {
    width: 6rem;
    height: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-image 0.2s ease-in-out;
    i {
      color: white;
    }
  }
`;

export default HeaderStyles;
