import Link from 'next/link';
import styled from 'styled-components';
import Router from 'next/router';
import NProgress from 'nprogress';

import HeaderStyles from './styles';
import Logo from './logo';

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};
Router.onRouteChangeError = () => {
  NProgress.done();
};


const Header = props => {

  return (
    <HeaderStyles>
      <nav className="nav__global">
        <Logo />
        <ul className="nav__global--list">
          <li>
            <Link href="/app">
              <a title="homepage">MyHome</a>
            </Link>
          </li>
          <li>
            <Link href="/settings">
              <a title="settings">Settings</a>
            </Link>
          </li>
          <li>
            <Link href="/signout">
              <a title="signout">Sign Out</a>
            </Link>
          </li>
        </ul>
      </nav>
    </HeaderStyles>
  );
};

export default Header;
