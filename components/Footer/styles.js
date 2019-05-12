import styled from 'styled-components';
import media from '../MediaQueries';

const FooterStyles = styled.footer`
  padding: 0 2rem;
  font-size: 1.5rem;

  ${media.brotherbear`
    padding-left: calc(50vw - 512px - 20px);
    padding-right: calc(50vw - 512px - 20px);
   `}
  div.footer__inner {
    padding: 14rem 0 12rem;
    display: flex;
    justify-content: space-between;

    ul.footer__nav--list {
      display: flex;
      li {
        margin-left: 1.5rem;
      }
      a {
        color: ${props => props.theme.footerLinksColor};
        &:hover {
          color: ${props => props.theme.footerLinksHover};
        }
      }
    }
  }
`;

export default FooterStyles;
