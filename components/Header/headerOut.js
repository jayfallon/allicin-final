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

const Header = props => (
  <HeaderStyles>
    <nav className="nav__global">
      <Logo />
      <ul className="nav__global--list">
        <li>
          <Link href="/auth/signup">
            <a title="signup">Sign Up</a>
          </Link>
        </li>
        <li>
          <Link href="/auth/signin">
            <a onClick={props.toggleHeader} title="signin">
              Sign In
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  </HeaderStyles>
);

export default Header;
