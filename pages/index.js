import React, { Component } from 'react';

import Link from 'next/link';
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div>
        <h1>the homepage</h1>
        <Link href="/test"><a title="hello">hello</a></Link>
      </div>
     );
  }
}
 
export default Index;
