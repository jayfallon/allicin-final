import styled from 'styled-components';

import media from '../MediaQueries';

const HomeStyles = styled.section`
  div.homepage__hero {
    background-image: url(/static/images/monica-melton-467245-unsplash.jpg);
    background-size: cover;
    background-position: 0 -10rem;
    ${media.brotherbear`
      min-height: 50rem;
   `}
  }
`;

export default HomeStyles;
