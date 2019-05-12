import Link from 'next/link';

import FooterStyles from './styles';

const Footer = props => (
  <FooterStyles>
    <div className="footer__inner">
      <p>{'\u00A92019 Allicin Learning Systems'}</p>
      <nav className="footer__nav">
        <ul className="footer__nav--list">
          <li className="footer__nav--item">
            <Link href="/app/terms">
              <a title="Terms">Terms</a>
            </Link>
          </li>
          <li className="footer__nav--item">
            <Link href="/app/privacy">
              <a title="Privacy">Privacy</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </FooterStyles>
);

export default Footer;
