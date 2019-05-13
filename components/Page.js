import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';

// import Slidedrawer from './Slidedrawer';
import { HeaderIn, HeaderOut } from './Header';
import Meta from './Meta';
import Footer from './Footer';
import Theme from './Theme';
import GlobalStyle from './Global';
import media from './MediaQueries';

const StyledPage = styled.div`
  height: 100%;
  color: ${props => props.theme.bodyText};
  main {
    background-color: ${props => props.theme.mainBackground};
    ${media.brotherbear`
      min-height: 50rem;
   `}
  }
`;

class Page extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      headerIn: false,
    };

    this.headerStateToggle = this.headerStateToggle.bind(this);
  }

  headerStateToggle = () => {
    this.setState(prevState => ({ headerIn: !prevState.headerIn }));
  };

  render() {
    let header;

    if (this.state.headerIn) {
      header = <HeaderIn toggleHeader={this.headerStateToggle} />;
    } else {
      header = <HeaderOut toggleHeader={this.headerStateToggle} />;
    }

    return (
      <ThemeProvider theme={Theme}>
        <StyledPage>
          <GlobalStyle />
          <Meta />
          {header}
          <main>{this.props.children}</main>
          <Footer />
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;
