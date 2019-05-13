import HomeStyles from './styles';

import { HeaderOut } from '../Header';
import { InnerDiv } from '../Global';

const Home = () => (
  <HomeStyles>
    <div className="homepage__hero">
      <InnerDiv>
        <h1>big hero here</h1>
      </InnerDiv>
    </div>
    <InnerDiv>
      <p>homepage</p>
    </InnerDiv>
  </HomeStyles>
);

export default Home;
