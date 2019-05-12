import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';

// import Slidedrawer from './Slidedrawer';
import Header from './Header';
import Meta from './Meta';
import Footer from './Footer';
import Theme from './Theme';
import GlobalStyle from './Global';
import media from './MediaQueries';

const StyledPage = styled.div`
  height: 100%;
  color: ${props => props.theme.bodyText};
`;

const Main = styled.main`
  background-color: ${props => props.theme.mainBackground};
  ${media.brotherbear`
  
    min-height: 50rem;
   `}
`;

const InnerDiv = styled.div`
  margin: 0 auto;
  padding: 0 2rem;
  ${media.brotherbear`
  
    padding-left: calc(50vw - 512px - 20px);
    padding-right: calc(50vw - 512px - 20px);
   `}

  a {
    color: ${props => props.theme.contentLinksColor};
    &:hover {
      color: ${props => props.theme.contentLinksHover};
    }
  }
`;

class Page extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <ThemeProvider theme={Theme}>
        <StyledPage>
          <GlobalStyle />
          <Meta />
          <Header />
          <Main>{this.props.children}</Main>
          <Footer />
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;
